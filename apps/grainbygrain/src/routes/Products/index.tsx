import { useCallback, useState } from 'react'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
import { Cross2Icon } from '@radix-ui/react-icons'

import { RouteParams, Routes } from '@/const'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import ProductSelect from '@/components/ProductSelect'
import MainContainer from '@/components/MainContainer'

import AddProduct from './AddProduct'

type TRouteParams = {
  [RouteParams.productId]: string
}

const Products = () => {
  const [hideInactive, setHideIncative] = useState(true)
  const navigate = useNavigate()
  const { productId = '' } = useParams<TRouteParams>()

  const handleProductSelect = useCallback(
    (id?: string) => {
      if (id) navigate(`/${Routes.products}/${id}`)
      else navigate(`/${Routes.products}`)
    },
    [navigate],
  )

  const handleClearProduct = useCallback(() => {
    navigate(`/${Routes.products}`)
  }, [navigate])

  return (
    <div className="flex h-full flex-col">
      <MainContainer>
        <div className="mb-2  flex justify-between">
          <TypographyH2 text="Products" />

          <div className="pt-1">{productId && <AddProduct onAdded={handleProductSelect} />}</div>
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex">
            <div className="flex align-middle">
              <ProductSelect
                value={productId}
                onChange={handleProductSelect}
                placeholder="Select"
                triggerClassName="w-40"
                onlyActive={hideInactive}
              />

              <Button variant="link" onClick={handleClearProduct}>
                <Cross2Icon />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="is_active" checked={hideInactive} onCheckedChange={setHideIncative} />
              <Label htmlFor="is_active">Hide inactive products</Label>
            </div>
          </div>
        </div>

        <div className="h-1 w-full shadow-sm" />
      </MainContainer>

      {productId ? (
        <Outlet />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <AddProduct onAdded={handleProductSelect} />
        </div>
      )}
    </div>
  )
}

export default Products
