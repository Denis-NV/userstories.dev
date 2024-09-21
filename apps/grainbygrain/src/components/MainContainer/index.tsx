import { ReactNode } from 'react'

type TProps = {
  children?: ReactNode
}
const MainContainer = ({ children }: TProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-2xl px-2">{children}</div>
    </div>
  )
}
export default MainContainer
