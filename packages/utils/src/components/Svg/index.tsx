import { forwardRef, cloneElement, SVGProps, Fragment } from 'react'
import styled from 'styled-components'

import { pxToInt } from '../..'

const StyledSvg = styled.svg<{ fill?: string }>`
  & path,
  & g,
  & polygon {
    fill: ${({ fill }) => fill && fill};
  }
`

type TProps = Omit<SVGProps<SVGSVGElement>, 'css'> & {
  children: JSX.Element
}

const SVG = forwardRef(({ children, width, fill }: TProps, ref): JSX.Element => {
  if (children.type === 'svg') {
    const { viewBox, ...rest } = children ? children.props : null
    const viewboxArr = String(viewBox)?.split(' ')
    const masterWidth = width ?? children?.props?.width ?? 0
    const vb = { width: parseInt(viewboxArr[2]), height: parseInt(viewboxArr[3]) }
    const intWidth = typeof masterWidth === 'string' ? pxToInt(masterWidth) : masterWidth

    return (
      <StyledSvg
        ref={ref}
        {...rest}
        viewBox={viewBox}
        width={width}
        height={`${intWidth * (vb.height / vb.width)}px`}
        fill={fill}
      >
        {Array.isArray(children?.props?.children)
          ? children?.props?.children.map((child: any, index: number) => (
              <Fragment key={index}>{cloneElement(child)}</Fragment>
            ))
          : cloneElement(children?.props?.children)}
      </StyledSvg>
    )
  }

  return children
})

export default SVG
