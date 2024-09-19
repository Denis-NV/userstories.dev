type TTypographyProps = {
  text?: string
}

export function TypographyH1({ text }: TTypographyProps) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{text}</h1>
}

export function TypographyH2({ text }: TTypographyProps) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{text}</h2>
  )
}

export function TypographyH3({ text }: TTypographyProps) {
  return <h3 className="scroll-m-20 pb-1 text-2xl font-semibold tracking-tight">{text}</h3>
}

export function TypographyLarge({ text }: TTypographyProps) {
  return <div className="text-lg font-semibold">{text}</div>
}
