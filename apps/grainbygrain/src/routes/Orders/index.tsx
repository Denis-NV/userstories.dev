import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'
import { useSearchParams } from 'react-router-dom'

import { ORDERS_QUERY } from './gql'

import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import { getCurrentFilter, updateCursor } from './utils'
import { useCallback } from 'react'

const limit = 1

const Orders = () => {
  const accessToken = useAccessToken()
  const [searchParams, setSearchParams] = useSearchParams()

  const query = useQuery(ORDERS_QUERY, {
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
    variables: {
      limit,
      filters: getCurrentFilter(searchParams),
    },
  })

  const { data, loading } = query
  const orders = data?.order

  const handleLoadMore = useCallback(() => {
    if (orders) {
      setSearchParams(updateCursor(orders))
    }
  }, [setSearchParams, orders])

  if (loading) console.log('loading...')
  else console.log(orders)

  return (
    <div>
      <TypographyH2 text="Orders" />
      <Button onClick={handleLoadMore}>Load more</Button>
    </div>
  )
}
export default Orders
