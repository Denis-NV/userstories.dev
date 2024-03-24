import { render, screen } from '@/test/utils'
import App from '.'
import Auth0ProviderWithHistory from '@/config/Auth0ProviderWithHistory'
import ApolloProvider from '@/config/ApolloProvider'

const renderComponent = () => {
  render(
    <Auth0ProviderWithHistory>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </Auth0ProviderWithHistory>,
  )
}

describe('Simple working test', () => {
  it('the title is visible', () => {
    renderComponent()

    expect(screen.getByText(/Checking Authentication/i)).toBeVisible()
  })
})
