import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function MenuIcon({ size = 24, color = 'white', ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0"
      {...props}
    >
      <g>
        <path id="Vector" d="M5 7.63H19" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
        <path id="Vector2" d="M5 12H19" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
        <path id="Vector3" d="M5 16.38H19" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default MenuIcon
