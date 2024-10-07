import React from 'react'
import { createRoot } from 'react-dom/client'
import { NhostClient, NhostProvider, NhostReactClientConstructorParams } from '@nhost/react'
import { createApolloClient } from '@nhost/apollo'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from '@/components/ErrorPage'
import Root from '@/routes/Root'
import Customers from '@/routes/Customers'
import Customer from '@/routes/Customer'
import Products from '@/routes/Products'
import Product from '@/routes/Product'
import Districts from '@/routes/Districts'
import District from '@/routes/District'
import SignIn from '@/routes/SignIn'
import Register from '@/routes/Register'
import Production from '@/routes/Production'
import Orders from '@/routes/Orders'
import Order from '@/routes/Order'
import Profile from '@/routes/Profile'
import Users from '@/routes/Users'
import { TOrderRouteParams } from '@/routes/Order/types'
import typePolicies from '@/typePolicies'

import './styles.css'
import { RouteParams, Routes } from './const'

const pointToProd = false

const nhostClientParams: NhostReactClientConstructorParams =
  import.meta.env.DEV && !pointToProd
    ? {
        authUrl: 'https://local.auth.local.nhost.run',
        graphqlUrl: 'https://local.graphql.local.nhost.run',
        storageUrl: 'https://local.storage.local.nhost.run',
        functionsUrl: 'https://local.functions.local.nhost.run',
        adminSecret: import.meta.env.HASURA_GRAPHQL_ADMIN_SECRET,
        subdomain: 'local',
      }
    : {
        subdomain: import.meta.env.VITE_GBG_NHOST_SUBDOMAIN,
        region: import.meta.env.VITE_GBG_NHOST_REGION,
      }

const nhost = new NhostClient({
  ...nhostClientParams,
  autoSignIn: false,
})

const client = createApolloClient({
  nhost,
  cache: new InMemoryCache({ typePolicies }),
})

const orderParamKey: keyof TOrderRouteParams = 'orderId'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.profile,
        element: <Profile />,
      },
      {
        path: Routes.users,
        element: <Users />,
      },
      {
        path: Routes.districts,
        element: <Districts />,
        children: [
          { index: true, element: <District /> },
          {
            path: `:${RouteParams.districtId}`,
            element: <District />,
          },
        ],
      },
      {
        path: Routes.customers,
        element: <Customers />,
        children: [
          { index: true, element: <Customer /> },
          {
            path: `:${RouteParams.customerId}`,
            element: <Customer />,
          },
        ],
      },
      {
        path: Routes.products,
        element: <Products />,
        children: [
          { index: true, element: <Product /> },
          {
            path: `:${RouteParams.productId}`,
            element: <Product />,
          },
        ],
      },
      {
        path: '/',
        element: <Orders />,
      },
      {
        path: Routes.orders,
        element: <Orders />,
      },
      {
        path: `${Routes.orders}/:${orderParamKey}`,
        element: <Order />,
      },
      {
        path: Routes.production,
        element: <Production />,
      },
    ],
  },
  {
    path: `/${Routes.signin}`,
    element: <SignIn />,
  },
  {
    path: `/${Routes.register}`,
    element: <Register />,
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </NhostProvider>
  </React.StrictMode>,
)
