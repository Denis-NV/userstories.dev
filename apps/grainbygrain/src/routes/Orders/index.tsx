import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { Button } from '@/components/ui/button'

import { ORDERS_QUERY } from './gql'
import { TypographyH2 } from '@/components/typography'

/* eslint-disable */
const currentFilter = {
  order_nr: {
    _eq: 1,
  },
  delivery_date: {
    _eq: '2024-05-19',
  },
  order_products: {
    product: {
      id: {
        _in: ['f42265e1-01fe-4be8-868b-18cf76a3b193', 'f57c15b8-ade0-4022-a771-c8311c0d8047'],
      },
    },
  },
  delivery_method: {
    id: {
      _eq: 'afd3eb20-dfaf-4882-8ca5-d033452e74d1',
    },
  },
  created_at: {
    _gt: '0000-01-01T00:00:00+00:00',
  },
}
/* eslint-enable */

const Orders = () => {
  const accessToken = useAccessToken()

  const { data, loading } = useQuery(ORDERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      filters: currentFilter,
    },
  })

  const orders = data?.order

  if (loading) console.log('loading...')
  else console.log(orders)

  return (
    <div>
      <TypographyH2 text="Orders" />
      <Button>Click me</Button>
    </div>
  )
}
export default Orders
