import { useCallback, useState } from 'react'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
import { Cross2Icon } from '@radix-ui/react-icons'

import { RouteParams, Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import CustomerSelect from '@/components/CustomerSelect'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

type TRouteParams = {
  [RouteParams.customerId]: string
}

const Customers = () => {
  const [hideInactive, setHideIncative] = useState(true)
  const navigate = useNavigate()
  const { customerId = '' } = useParams<TRouteParams>()

  const handleCustomerSelect = useCallback(
    (value?: string) => {
      if (value) navigate(`/${Routes.customers}/${value}`)
      else navigate(`/${Routes.customers}`)
    },
    [navigate],
  )

  const handleClearCustomer = useCallback(() => {
    navigate(`/${Routes.customers}`)
  }, [navigate])

  return (
    <div className="flex h-full flex-col">
      <div className="mb-2  flex justify-between">
        <TypographyH2 text="Customers" />

        <div className="pt-1">
          {/* <AddOrder onAdded={handleOrderAdd} /> */}
          {customerId && <Button size="sm">Add customer</Button>}
        </div>
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

      {customerId ? (
        <Outlet />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <Button size="sm">Add customer</Button>
        </div>
      )}
    </div>
  )
}

export default Customers
