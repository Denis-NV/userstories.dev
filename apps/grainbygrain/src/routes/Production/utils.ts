import { InputMaybe, Order_Product_Bool_Exp } from '@/gql/graphql'

export const getParamsFilter = (
  searchParams: URLSearchParams,
): InputMaybe<Order_Product_Bool_Exp> => {
  const delivery_date_from = searchParams.get('from')
  const delivery_date_until = searchParams.get('until')
  const department = searchParams.get('department')

  return {
    ...(department
      ? {
          product: {
            department: {
              id: {
                _eq: department,
              },
            },
          },
        }
      : {}),
    ...(delivery_date_from || delivery_date_until
      ? {
          order: {
            delivery_date: {
              ...(delivery_date_from ? { _gte: delivery_date_from } : {}),
              ...(delivery_date_until ? { _lte: delivery_date_until } : {}),
            },
          },
        }
      : {}),
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
