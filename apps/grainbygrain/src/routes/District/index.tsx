import { useParams } from 'react-router-dom'
import { useAccessToken } from '@nhost/react'
import { useQuery } from '@apollo/client'

import { RouteParams } from '@/const'
import MainContainer from '@/components/MainContainer'

import { DISTRICT_QUERY } from './gql'
import DetailsForm from './DetailsForm'

type TRouteParams = {
  [RouteParams.districtId]: string
}

function District() {
  const { districtId } = useParams<TRouteParams>()
  const accessToken = useAccessToken()

  const { data, loading } = useQuery(DISTRICT_QUERY, {
    variables: { id: districtId },
    context: {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  })

  const district = data?.district_by_pk

  return (
    <div className="w-full overflow-scroll pb-12 pt-6">
      <MainContainer>
        {loading ? <span>Loading ...</span> : district && <DetailsForm district={district} />}
      </MainContainer>
    </div>
  )
}
export default District
