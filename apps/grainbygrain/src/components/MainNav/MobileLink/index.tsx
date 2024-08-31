import { useCallback } from 'react'
import { Link, LinkProps, useNavigate } from 'react-router-dom'

type TProps = LinkProps & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}
const MobileLink = ({ to, onOpenChange, className, children, ...props }: TProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(to)
    onOpenChange?.(false)
  }, [navigate, onOpenChange])

  return (
    <Link to={to} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  )
}

export default MobileLink
