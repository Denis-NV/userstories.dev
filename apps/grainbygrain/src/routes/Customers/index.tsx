import { useCallback, useState } from 'react'
import { useNavigate, Outlet, useParams, Navigate } from 'react-router-dom'
import { Cross2Icon } from '@radix-ui/react-icons'

import { Roles, RouteParams, Routes } from '@/const'
import { useAllowedForUser } from '@/utils/isAllowedForUser'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import CustomerSelect from '@/components/CustomerSelect'
import MainContainer from '@/components/MainContainer'

import AddCustomer from './AddCustomer'

type TRouteParams = {
  [RouteParams.customerId]: string
}

const Customers = () => {
  const [hideInactive, setHideIncative] = useState(true)
  const navigate = useNavigate()
  const isAllowed = useAllowedForUser(Roles.order_manager)
  const { customerId = '' } = useParams<TRouteParams>()

  const handleCustomerSelect = useCallback(
    (id?: string) => {
      if (id) navigate(`/${Routes.customers}/${id}`)
      else navigate(`/${Routes.customers}`)
    },
    [navigate],
  )

  const handleClearCustomer = useCallback(() => {
    navigate(`/${Routes.customers}`)
  }, [navigate])

  return isAllowed ? (
    <div className="flex h-full flex-col">
      <MainContainer>
        <div className="mb-2  flex justify-between">
          <TypographyH2 text="Customers" />

          <div className="pt-1">{customerId && <AddCustomer onAdded={handleCustomerSelect} />}</div>
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex">
            <div className="flex align-middle">
              <CustomerSelect
                value={customerId}
                onChange={handleCustomerSelect}
                placeholder="Select"
                triggerClassName="w-40"
                onlyActive={hideInactive}
              />

              <Button variant="link" onClick={handleClearCustomer}>
                <Cross2Icon />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="is_active" checked={hideInactive} onCheckedChange={setHideIncative} />
              <Label htmlFor="is_active">Hide inactive customer</Label>
            </div>
          </div>
        </div>

        <div className="h-1 w-full shadow-sm" />
      </MainContainer>

      {customerId ? (
        <Outlet />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <AddCustomer onAdded={handleCustomerSelect} />
        </div>
      )}
    </div>
  ) : (
    <Navigate to="/" replace />
  )
}

export default Customers
