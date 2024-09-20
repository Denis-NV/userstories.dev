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
    <li>
      <Link
        to={`/${Routes.orders}?${UrlParams.delivery_date}=${date}&${UrlParams.order_products}=${prodId}`}
        className="hover:underline"
      >
        {name}
      </Link>
      - <span className="font-bold">{quantity}</span>
    </li>
  )
}
export default ProductTotal
