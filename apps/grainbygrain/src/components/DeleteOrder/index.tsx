import { ReactNode, useCallback, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useAccessToken } from '@nhost/react'

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
}

const DeleteOrder = ({ orderId, trigger = <Button>Delete</Button> }: TProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const accessToken = useAccessToken()

  const [deleteOrder, deleteMutation] = useMutation(DELETE_ORDER_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const handleDelete = useCallback(() => {
    deleteOrder({
      variables: {
        id: orderId,
      },
      onCompleted: () => setIsOpen(false),
      update: (cache, { data }) => {
        if (data?.delete_order_by_pk) {
          cache.evict({ id: cache.identify(data?.delete_order_by_pk) })
          cache.gc()
        }
      },
    })
  }, [deleteOrder, setIsOpen, orderId])

  const handleCancel = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

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
