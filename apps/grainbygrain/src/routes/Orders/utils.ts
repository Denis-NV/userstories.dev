import { InputMaybe, Order_Bool_Exp } from '@/gql/graphql'

export const getParamsFilter = (searchParams: URLSearchParams): InputMaybe<Order_Bool_Exp> => {
  const order_nr = searchParams.get('order_nr')
  const delivery_date = searchParams.get('delivery_date')
  const order_products = searchParams.get('order_products')
  const delivery_method = searchParams.get('delivery_method')
  const customer = searchParams.get('customer')

  return {
    ...(order_nr ? { order_nr: { _eq: parseInt(order_nr) } } : {}),
    ...(delivery_date ? { delivery_date: { _eq: delivery_date } } : {}),
    ...(order_products
      ? { order_products: { product: { id: { _in: order_products.split(',') } } } }
      : {}),
    ...(delivery_method ? { delivery_method: { id: { _eq: delivery_method } } } : {}),
    ...(customer ? { customer: { id: { _eq: customer } } } : {}),
  }
}

export const getCursorFilter = (items?: { created_at: string }[]) => {
  if (items) {
    const dates = items.map(({ created_at }) => new Date(created_at).getTime())
    const maxDate = Math.max(...dates)
    const cursor = items[dates.findIndex((date) => date === maxDate)].created_at

    return { created_at: { _gt: cursor } }
  }

  return { created_at: { _gt: '0000-01-01T00:00:00+00:00' } }
}
