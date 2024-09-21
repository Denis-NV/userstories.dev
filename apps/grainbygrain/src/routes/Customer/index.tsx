import { useParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { RouteParams } from '@/const'
import MainContainer from '@/components/MainContainer'

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
    <div className="w-full overflow-scroll pb-8 pt-6">
      <MainContainer>
        {loading ? <span>Loading ...</span> : customer && <DetailsForm customer={customer} />}
      </MainContainer>
    </div>
  )
}
export default Customer
