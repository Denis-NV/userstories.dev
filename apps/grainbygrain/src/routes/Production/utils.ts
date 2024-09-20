import { UrlParams } from '@/const'
import { InputMaybe, Order_Product_Bool_Exp } from '@/gql/graphql'

export const getParamsFilter = (
  searchParams: URLSearchParams,
): InputMaybe<Order_Product_Bool_Exp> => {
  const delivery_date = searchParams.get(UrlParams.delivery_date)
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
    ...(delivery_date
      ? {
          order: {
            delivery_date: { _eq: delivery_date },
          },
        }
      : {}),
  }
}
