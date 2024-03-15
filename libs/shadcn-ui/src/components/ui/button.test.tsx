import { render, screen } from '@/test/utils'
import { Button } from './button'

describe('Button component', () => {
  it('should render', () => {
    render(<Button>Click me</Button>)

    expect(screen.findByRole('button', { name: /Click me/i }))
  })
})
