import { UrlParams } from '@/const'
import { InputMaybe, Order_Product_Bool_Exp } from '@/gql/graphql'

export const getParamsFilter = (
  searchParams: URLSearchParams,
): InputMaybe<Order_Product_Bool_Exp> => {
  const delivery_date_from = searchParams.get(UrlParams.from)
  const delivery_date_to = searchParams.get(UrlParams.to)
  const department = searchParams.get(UrlParams.department)

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
    ...(delivery_date_from || delivery_date_to
      ? {
          order: {
            delivery_date: {
              ...(delivery_date_from ? { _gte: delivery_date_from } : {}),
              ...(delivery_date_to ? { _lte: delivery_date_to } : {}),
            },
          },
        }
      : {}),
  }
}
