import { ReactNode, useCallback, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'
import { TrashIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { DELETE_ORDER_MUTATION } from './gql'

type TProps = {
  orderId: string
  trigger?: ReactNode
  onDeleted?: (orderId: string) => void
}

const DeleteOrder = ({
  orderId,
  trigger = (
    <Button variant="link">
      <TrashIcon />
    </Button>
  ),
  onDeleted,
}: TProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const accessToken = useAccessToken()

  const [deleteOrder, deleteMutation] = useMutation(DELETE_ORDER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    onCompleted: () => {
      setIsOpen(false)

      if (onDeleted) onDeleted(orderId)
    },
    update: (cache, { data }) => {
      if (data?.delete_order_by_pk) {
        cache.modify({
          fields: {
            order_aggregate: (_, { DELETE }) => {
              return DELETE
            },
            order: (_, { DELETE }) => {
              return DELETE
            },
          },
        })

        cache.evict({ id: cache.identify(data?.delete_order_by_pk) })
        cache.gc()
      }
    },
  })

  const handleDelete = useCallback(() => {
    deleteOrder({
      variables: {
        id: orderId,
      },
    })
  }, [deleteOrder, orderId])

  const handleCancel = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  // TODO: implement error handling

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Warning</DialogTitle>
          <DialogDescription>Are you sure you want to delete this order?</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-col space-y-2 sm:space-y-0">
          <Button onClick={handleDelete} disabled={deleteMutation.loading}>
            Confirm
          </Button>
          <Button onClick={handleCancel} disabled={deleteMutation.loading} variant="outline">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default DeleteOrder
