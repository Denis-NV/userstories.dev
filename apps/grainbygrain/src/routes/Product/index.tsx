import { useParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { RouteParams } from '@/const'

import { PRODUCT_QUERY } from './gql'
import DetailsForm from './DetailsForm'

type TRouteParams = {
  [RouteParams.productId]: string
}

const Customer = () => {
  const { productId } = useParams<TRouteParams>()
  const accessToken = useAccessToken()

  const { data, loading } = useQuery(PRODUCT_QUERY, {
    variables: { id: productId },
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const product = data?.product_by_pk

  return (
    <div className="w-full overflow-scroll pb-12 pt-6">
      {loading ? <span>Loading ...</span> : product && <DetailsForm product={product} />}
    </div>
  )
}
export default Customer
