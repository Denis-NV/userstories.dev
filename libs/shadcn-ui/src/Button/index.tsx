type TProps = {
  onClick: () => void
  children: any
}

const Button = ({ onClick, children }: TProps) => {
  return (
    <button
      onClick={onClick}
      className="
      rounded-md 
      bg-slate-500 
      p-2 
      font-bold 
      text-white 
      hover:bg-slate-600 
      active:bg-slate-700"
    >
      {children}
    </button>
  )
}

export default Button
