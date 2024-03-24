import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

function customRender(ui: React.ReactElement, options = {}): ReturnType<typeof render> {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react' // eslint-disable-line
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render } // eslint-disable-line
