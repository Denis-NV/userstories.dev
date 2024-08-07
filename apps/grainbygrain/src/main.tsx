import React from 'react'
import { createRoot } from 'react-dom/client'
import { NhostClient, NhostProvider } from '@nhost/react'
import { createApolloClient } from '@nhost/apollo'
import { ApolloProvider, InMemoryCache } from '@apollo/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './context/ThemeModeProvider'
import ErrorPage from '@/components/ErrorPage'
import Root from '@/routes/Root'
import Customers from '@/routes/Customers'
import Customer from '@/routes/Customer'
import SignIn from '@/routes/SignIn'
import Products from '@/routes/Products'
import Orders from '@/routes/Orders'
import Order from '@/routes/Order'
import { TOrderRouteParams } from '@/routes/Order/types'
import typePolicies from '@/utils/typePolicies'

import './styles.css'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
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
        path: 'customers',
        element: <Customers />,
        children: [
          { index: true, element: <Customer /> },
          {
            path: ':customerId',
            element: <Customer />,
          },
        ],
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: `order/:${orderParamKey}`,
        element: <Order />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NhostProvider nhost={nhost}>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </NhostProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
