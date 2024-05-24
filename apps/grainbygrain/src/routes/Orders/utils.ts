import { InputMaybe, Order_Bool_Exp } from '@/gql/graphql'

export const getCurrentFilter = (searchParams: URLSearchParams): InputMaybe<Order_Bool_Exp> => {
  const order_nr = searchParams.get('order_nr')
  const delivery_date = searchParams.get('delivery_date')
  const order_products = searchParams.get('order_products')
  const delivery_method = searchParams.get('delivery_method')
  const created_at = searchParams.get('created_at')

  return {
    ...(order_nr ? { order_nr: { _eq: parseInt(order_nr) } } : {}),
    ...(delivery_date ? { delivery_date: { _eq: delivery_date } } : {}),
    ...(order_products
      ? { order_products: { product: { id: { _in: order_products.split(',') } } } }
      : {}),
    ...(delivery_method ? { delivery_method: { id: { _eq: delivery_method } } } : {}),
    ...{ created_at: { _gt: created_at ?? '0000-01-01T00:00:00+00:00' } },
  }
}

export const updateCursor = (items: { created_at: string }[]) => {
  const dates = items.map(({ created_at }) => new Date(created_at).getTime())
  const maxDate = Math.max(...dates)
  const cursor = items[dates.findIndex((date) => date === maxDate)].created_at

  return (searchParams: URLSearchParams): URLSearchParams => {
    searchParams.set('created_at', cursor)

    return searchParams
  }
}
