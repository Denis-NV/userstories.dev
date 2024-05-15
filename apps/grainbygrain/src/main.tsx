import React from 'react'
import { createRoot } from 'react-dom/client'
import { NhostClient, NhostProvider } from '@nhost/react'
import { createApolloClient } from '@nhost/apollo'
import { ApolloProvider } from '@apollo/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from '@/components/ErrorPage'
import Root from '@/routes/Root'
import Customers from '@/routes/Customers'
import Customer from '@/routes/Customer'
import SignIn from '@/routes/SignIn'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
  autoSignIn: false,
})

const client = createApolloClient({
  nhost,
})

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
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
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
