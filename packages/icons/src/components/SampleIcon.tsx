import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function SampleIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Subtract"
          d="M7.42004 17H16.54C16.92 17 17.14 16.59 16.9 16.31L14.2 13.16C14.01 12.94 13.66 12.95 13.48 13.17L11.48 15.66C11.29 15.9 10.91 15.89 10.73 15.64L9.62004 14.08C9.44004 13.83 9.06004 13.82 8.87004 14.06L7.06004 16.31C6.83004 16.59 7.05004 16.99 7.43004 16.99L7.42004 17Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default SampleIcon
