import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { TableCell } from '@/components/ui/table'

type TProps = { orderId: string; content: string }

const OrderCell = ({ orderId, content }: TProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/order/${orderId}`)
  }, [orderId, navigate])

  return (
    <TableCell className="hover:cursor-pointer" onClick={handleClick}>
      <span className="font-medium">{content}</span>
    </TableCell>
  )
}
export default OrderCell
