import { FC, ReactNode, Fragment, useCallback, ChangeEvent } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import debounce from 'debounce'
import { ChevronsUpDown } from 'lucide-react'

import { cn } from '@/utils'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type TProps = {
  selected?: string
  onSearch: (str: string) => void
  open: boolean
  onOpen: (open: boolean) => void
  TriggerWrapperComp?: FC<{ children?: ReactNode }>
  placeholder?: string
  triggerClassName?: string
  searchResult?: ReactNode
  notFoundMsg?: string
  noItemsFound?: boolean
}

const ComboBox = ({
  selected,
  onSearch,
  TriggerWrapperComp = Fragment,
  placeholder = 'Select item',
  notFoundMsg = 'No items found',
  triggerClassName,
  searchResult,
  noItemsFound,
  open,
  onOpen,
}: TProps) => {
  const handleSearch = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => onSearch(target?.value),
    [onSearch],
  )

  const handleOpen = useCallback(() => {
    onSearch('')
    onOpen(!open)
  }, [onSearch, onOpen, open])

  return (
    <Popover open={open} onOpenChange={handleOpen} modal>
      <TriggerWrapperComp>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn('w-full justify-between', triggerClassName)}
          >
            <p className={cn(selected && '... truncate')}>{selected ? selected : placeholder}</p>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
      </TriggerWrapperComp>
      <PopoverContent align="start" className="p-0">
        <div className="flex items-center space-x-2 border-b-[1px] py-1 pl-2 pr-1">
          <MagnifyingGlassIcon className="h-4 w-4 opacity-50" />
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <input
            type="search"
            className="h-8 w-full bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
            placeholder="Search by name or address"
            onChange={debounce(handleSearch, 500)}
            onEmptied={debounce(handleSearch, 500)}
            onKeyDown={(e) => {
              e.stopPropagation()
            }}
          />
        </div>

        <div className="max-h-60 overflow-scroll">
          {searchResult}

          {noItemsFound && <p className="py-6 text-center text-sm">{notFoundMsg}</p>}
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default ComboBox
