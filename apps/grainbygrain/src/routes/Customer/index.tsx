import { useParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { RouteParams } from '@/const'

import { CUSTOMER_QUERY } from './gql'
import DetailsForm from './DetailsForm'

type TRouteParams = {
  [RouteParams.customerId]: string
}

const Customer = () => {
  const { customerId } = useParams<TRouteParams>()
  const accessToken = useAccessToken()

  const { data, loading } = useQuery(CUSTOMER_QUERY, {
    variables: { id: customerId },
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const customer = data?.customer_by_pk

  return (
    <div className="w-full overflow-scroll pb-12">
      {loading ? <span>Loading ...</span> : customer && <DetailsForm customer={customer} />}
    </div>
  )
}
export default Customer
