import { useCallback } from 'react'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import CustomerSelect from '@/components/CustomerSelect'
import { RouteParams, Routes } from '@/const'

type TRouteParams = {
  [RouteParams.customerId]: string
}

const Customers = () => {
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

      <div className="mb-6 flex justify-between">
        <div className="flex">
          <div className="flex align-middle">
            <CustomerSelect
              value={customerId}
              onChange={handleCustomerSelect}
              placeholder="customer"
              triggerClassName="w-28"
            />

            <Button variant="link" onClick={handleClearCustomer}>
              <Cross2Icon />
            </Button>
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
