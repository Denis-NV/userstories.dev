import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cog } from 'lucide-react'
import { useSignOut, useUserData, useUserDefaultRole } from '@nhost/react'

import { cn } from '@/utils'
import { isAllowedForUser } from '@/utils/useAllowedForUser'
import { Roles, Routes } from '@/const'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

import SettingsLink from './SettingsLink'

const navData = [
  {
    name: 'Orders',
    to: `/${Routes.orders}`,
  },
  {
    name: 'Production',
    to: `/${Routes.production}`,
  },
]

const settingsData = [
  {
    name: 'Profile',
    to: `/${Routes.profile}`,
    allowedRole: Roles.user,
  },
  {
    name: 'Districts',
    to: `/${Routes.districts}`,
    allowedRole: Roles.order_manager,
  },
  {
    name: 'Customers',
    to: `/${Routes.customers}`,
    allowedRole: Roles.order_manager,
  },
  {
    name: 'Products',
    to: `/${Routes.products}`,
    allowedRole: Roles.order_manager,
  },
  {
    name: 'Users',
    to: `/${Routes.users}`,
    allowedRole: Roles.general_manager,
  },
]

const MainNav = () => {
  const [open, setOpen] = useState(false)
  const { signOut } = useSignOut()
  const role = useUserDefaultRole() as Roles
  const data = useUserData()

  const name = data?.displayName ?? ''

  const handleSignOut = useCallback(() => {
    signOut()
  }, [signOut])

  const isSelected = (to: string, index: number) =>
    location?.pathname?.startsWith(to) || (index === 0 && location?.pathname === '/')

  return (
    <div className="flex w-full flex-row justify-between align-middle">
      <nav className="flex items-center">
        {navData.map(({ to, name }, index) => (
          <Link
            to={to}
            key={to}
            className={cn(
              'hover:text-primary text-md flex h-7 items-center justify-center rounded-full px-4 text-center font-medium transition-colors',
              isSelected(to, index)
                ? 'bg-muted text-primary font-semibold'
                : 'text-muted-foreground',
            )}
          >
            {name}
          </Link>
        ))}
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Cog className="h-[1.2rem] w-[1.2rem]  transition-all" />
            <span className="sr-only">Settings</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] pr-0">
          <div className="mb-8 flex w-full flex-col items-end pr-8 pt-6">
            <p className="text-muted-foreground mb-4 text-right">
              Hi,{' '}
              <span className="font-medium text-black">{name.substring(0, name.indexOf('@'))}</span>
              <br />
              Your role is:{' '}
              <span className="font-medium text-black">{role?.replace('_', ' ')}</span>
            </p>

            <Button variant="default" size="sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription className="sr-only">Menu</SheetDescription>

          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
            <div className="flex flex-col space-y-3">
              {settingsData.map(
                ({ to, name, allowedRole }, index) =>
                  to &&
                  isAllowedForUser(allowedRole, role) && (
                    <SettingsLink
                      key={to}
                      to={to}
                      className={cn(
                        'hover:text-primary transition-colors',
                        isSelected(to, index)
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground',
                      )}
                      onOpenChange={setOpen}
                    >
                      {name}
                    </SettingsLink>
                  ),
              )}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default MainNav
