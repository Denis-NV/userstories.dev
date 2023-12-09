import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: #d53255;
  color: hsl(0deg, 0%, 98%);
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #0a558c;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #62b0e8;
    background-color: #0a558c;
  }
`

type TProps = {
  onClick: () => void
  children: any
}

const Button = ({ onClick, children }: TProps): JSX.Element => {
  const camelCase = 'Hello Planet!'
  console.log(camelCase)

  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
