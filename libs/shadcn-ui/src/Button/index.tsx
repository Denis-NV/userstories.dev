type TProps = {
  onClick: () => void
  children: any
}

const Button = ({ onClick, children }: TProps) => {
  return (
    <button
      onClick={onClick}
      className="
      ui-bg-blue-dark 
      ui-rounded-md
      ui-p-2 
      ui-font-bold 
      ui-text-white 
      hover:ui-bg-slate-600 
      active:ui-bg-slate-700
      "
    >
      {children}
    </button>
  )
}

export default Button
