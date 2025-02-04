import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function UserIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          id="Vector2"
          d="M18.5594 19H5.46066C5.20029 19 5 18.801 5 18.5622V18.3532C5 17.209 5.62089 16.1443 6.64235 15.5373L6.8927 15.3881C10.0172 13.5373 13.9828 13.5373 17.1073 15.3881L17.3577 15.5373C18.3791 16.1443 19 17.209 19 18.3532V18.5622C19 18.801 18.7897 19 18.5393 19H18.5594Z"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default UserIcon
