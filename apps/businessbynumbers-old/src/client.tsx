import React from 'react'
import { createRoot } from 'react-dom/client'

import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'

import App from './App'

Amplify.configure(awsExports)

createRoot(document.getElementById('root')).render(<App />)

if (module.hot) {
  module.hot.accept()
}
