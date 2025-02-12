import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function PauseIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M6 6C6 5.44772 6.44772 5 7 5H9C9.55228 5 10 5.44772 10 6V18C10 18.5523 9.55228 19 9 19H7C6.44772 19 6 18.5523 6 18V6Z"
          fill={color}
        />
        <path
          d="M14 6C14 5.44772 14.4477 5 15 5H17C17.5523 5 18 5.44772 18 6V18C18 18.5523 17.5523 19 17 19H15C14.4477 19 14 18.5523 14 18V6Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default PauseIcon
