// import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'
import * as rtl from '@testing-library/react'

const { render, ...rest } = rtl

afterEach(() => {
  rest.cleanup()
})

function customRender(ui: React.ReactElement, options = {}): ReturnType<typeof render> {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render, rest }
