export function Button(props: any) {
  return (
    <button style={{ backgroundColor: 'teal' }} onClick={() => props.onClick()}>
      {props.children}
    </button>
  )
}
export default Button
