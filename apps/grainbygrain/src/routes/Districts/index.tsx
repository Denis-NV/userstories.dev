import { useCallback } from 'react'
import { useNavigate, Outlet, useParams, Navigate } from 'react-router-dom'
import { Cross2Icon } from '@radix-ui/react-icons'

import { Roles, RouteParams, Routes } from '@/const'
import { useAllowedForUser } from '@/utils/isAllowedForUser'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import DistrictSelect from '@/components/DistrictSelect'
import MainContainer from '@/components/MainContainer'

import AddDistrict from './AddDistrict'

type TRouteParams = {
  [RouteParams.districtId]: string
}

const Districts = () => {
  const navigate = useNavigate()
  const isAllowed = useAllowedForUser(Roles.order_manager)
  const { districtId = '' } = useParams<TRouteParams>()

  const handleDistrictSelect = useCallback(
    (id?: string) => {
      if (id) navigate(`/${Routes.districts}/${id}`)
      else navigate(`/${Routes.districts}`)
    },
    [navigate],
  )

  const handleClearDistrict = useCallback(() => {
    navigate(`/${Routes.districts}`)
  }, [navigate])

  return isAllowed ? (
    <div className="flex h-full flex-col">
      <MainContainer>
        <div className="mb-2  flex justify-between">
          <TypographyH2 text="Districts" />

          <div className="pt-1">{districtId && <AddDistrict onAdded={handleDistrictSelect} />}</div>
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex align-middle">
            <DistrictSelect
              value={districtId}
              onChange={handleDistrictSelect}
              placeholder="Select"
              triggerClassName="w-40"
            />

            <Button variant="link" onClick={handleClearDistrict}>
              <Cross2Icon />
            </Button>
          </div>
        </div>

        <div className="h-1 w-full shadow-sm" />
      </MainContainer>

      {districtId ? (
        <Outlet />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <AddDistrict onAdded={handleDistrictSelect} />
        </div>
      )}
    </div>
  ) : (
    <Navigate to="/" replace />
  )
}
export default Districts
