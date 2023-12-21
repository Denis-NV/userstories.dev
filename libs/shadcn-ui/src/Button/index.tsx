type TProps = {
  onClick: () => void
  children: any
}

const Button = ({ onClick, children }: TProps) => {
  return (
    <button
      onClick={onClick}
      className="
      bg-blue-dark 
      rounded-md
      p-2 
      font-bold 
      text-white 
      hover:bg-green-600 
      active:bg-slate-700"
    >
      {children}
    </button>
  )
}

export default Button
