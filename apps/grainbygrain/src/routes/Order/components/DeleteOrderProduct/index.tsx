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

import { DELETE_ORDER_PRODUCT_MUTATION } from '../../gql'

type TProps = {
  orderProdId: string
  trigger?: ReactNode
}

const DeleteOrderProduct = ({
  orderProdId,
  trigger = <Button size="sm">Update</Button>,
}: TProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const accessToken = useAccessToken()

  const [deleteProduct, deleteMutation] = useMutation(DELETE_ORDER_PRODUCT_MUTATION, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    update: (cache, { data }) => {
      if (data?.delete_order_product_by_pk) {
        cache.evict({ id: cache.identify(data?.delete_order_product_by_pk) })
        cache.gc()
      }
    },
  })

  const handleDelete = useCallback(() => {
    deleteProduct({
      variables: {
        id: orderProdId,
      },
    })
  }, [deleteProduct, orderProdId])

  const handleCancel = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  // TODO: implement error handling

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Warning</DialogTitle>
          <DialogDescription>Are you sure you want to remove this product?</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-col space-y-2 sm:space-y-0">
          <Button onClick={handleDelete} disabled={deleteMutation.loading} variant="destructive">
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
export default DeleteOrderProduct
