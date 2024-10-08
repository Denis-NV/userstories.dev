import { InputMaybe, Order_Bool_Exp } from '@/gql/graphql'
import { UrlParams } from '@/const'

export const getParamsFilter = (searchParams: URLSearchParams): InputMaybe<Order_Bool_Exp> => {
  const order_nr = searchParams.get(UrlParams.order_nr)
  const delivery_date = searchParams.get(UrlParams.delivery_date)
  const order_products = searchParams.get(UrlParams.order_products)
  const delivery_method = searchParams.get(UrlParams.delivery_method)
  const customer = searchParams.get(UrlParams.customer)
  const department = searchParams.get(UrlParams.department)

  return {
    ...(order_nr ? { order_nr: { _eq: parseInt(order_nr) } } : {}),
    ...(delivery_date ? { delivery_date: { _eq: delivery_date } } : {}),
    ...(order_products
      ? { order_products: { product: { id: { _in: order_products.split(',') } } } }
      : {}),
    ...(delivery_method ? { delivery_method: { id: { _eq: delivery_method } } } : {}),
    ...(customer ? { customer: { id: { _eq: customer } } } : {}),
    ...(department ? { order_products: { product: { department_id: { _eq: department } } } } : {}),
  }
}

export const getCursorFilter = (items?: { created_at: string }[]) => {
  if (items) {
    const dates = items.map(({ created_at }) => new Date(created_at).getTime())
    const maxDate = Math.min(...dates)
    const cursor = items[dates.findIndex((date) => date === maxDate)].created_at

    return { created_at: { _lt: cursor } }
  }

  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  date.setDate(date.getDate() + 1)

  return { created_at: { _lt: date.toISOString() } }
}
