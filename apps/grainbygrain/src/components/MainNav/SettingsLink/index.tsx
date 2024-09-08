import { ReactNode, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { cn } from '@/utils'

type TProps = {
  onOpenChange?: (open: boolean) => void
  children: ReactNode
  className?: string
  to: string
}
const SettingsLink = ({ to, onOpenChange, className, children, ...props }: TProps) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(to)
    onOpenChange?.(false)
  }, [navigate, onOpenChange])

  return (
    <a onClick={handleClick} className={cn('cursor-pointer', className)} {...props}>
      {children}
    </a>
  )
}

export default SettingsLink
