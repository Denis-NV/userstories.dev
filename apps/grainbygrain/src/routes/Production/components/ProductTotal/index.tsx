import { Link } from 'react-router-dom'

import { Routes, UrlParams } from '@/const'

type TProps = {
  name: string
  quantity: number
  date: string
  prodId: string
}

const ProductTotal = ({ name, quantity, date, prodId }: TProps) => {
  return (
    <div className="flex w-full flex-row space-x-1">
      <Link
        to={`/${Routes.orders}?${UrlParams.delivery_date}=${date}&${UrlParams.order_products}=${prodId}`}
      >
        <span className="hover:underline">{name}</span>
      </Link>
      <span className="mb-1 flex-1 border-b-[1px] border-dotted border-gray-200" />
      <span className="pr-4">{quantity}</span>
    </div>
  )
}
export default ProductTotal
