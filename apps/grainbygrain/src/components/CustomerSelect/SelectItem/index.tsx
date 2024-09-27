import { ReactNode, useCallback } from 'react'
import { cn } from '@/utils'

type TSelectItem<T extends string> = {
  value: T
  onValueChange: (val: T) => void
  isSelected: boolean
  className?: string
  children?: ReactNode
}

const SelectItem = <T extends string>({
  value,
  onValueChange,
  isSelected,
  children,
  className,
}: TSelectItem<T>) => {
  const onClick = useCallback(() => {
    onValueChange(value)
  }, [onValueChange, value])

  return (
    <div
      aria-selected={isSelected ? 'true' : 'false'}
      className={cn(
        'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-slate-100 hover:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        className,
      )}
      onClick={onClick}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && (
          <span aria-hidden="true">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        )}
      </span>

      <span>{children}</span>
    </div>
  )
}

export default SelectItem