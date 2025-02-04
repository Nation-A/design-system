import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function WishlistIcon({ size = 24, color = 'white', ...props }: Props) {
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
        <path
          id="Vector"
          d="M12 5L14.1607 9.61024L19 10.3471L15.505 13.9317L16.3314 19L12 16.6102L7.66856 19L8.49502 13.9317L5 10.3471L9.83926 9.61024L12 5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default WishlistIcon
