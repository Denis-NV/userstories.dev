import {
  useMemo,
  // useState
} from 'react'
import { Link } from 'react-router-dom'
// import { format } from 'date-fns'

import { cn } from '@/utils'
import { Routes } from '@/const'
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from '@/components/ui/sheet'
// import { Button } from '@/components/ui/button'
// import { ScrollArea } from '@/components/ui/scroll-area'

// import MobileLink from './MobileLink'

const MainNav = () => {
  // const [open, setOpen] = useState(false)

  const navData = useMemo(
    () => [
      {
        name: 'Orders',
        // to: `/${Routes.orders}?delivery_date=${format(new Date(), 'yyyy-MM-dd')}`,
        to: `/${Routes.orders}`,
      },
      {
        name: 'Production',
        to: `/${Routes.production}`,
      },
    ],
    [],
  )

  const isSelected = (to: string, index: number) =>
    location?.pathname?.startsWith(to) || (index === 0 && location?.pathname === '/')

  return (
    <div className="flex">
      <nav
        // className="hidden items-center sm:flex"
        className="flex items-center"
      >
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

      {/* <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden"
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] pr-0">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="sr-only">Menu</SheetDescription>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
            <div className="flex flex-col space-y-3">
              {navData.map(
                ({ to, name }, index) =>
                  to && (
                    <MobileLink
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
                    </MobileLink>
                  ),
              )}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet> */}
    </div>
  )
}
export default MainNav
