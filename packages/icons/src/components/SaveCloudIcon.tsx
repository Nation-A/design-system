import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function SaveCloudIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M9.72998 12.58L11.53 14.25L14.23 11.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector2"
          d="M7.31586 18C5.57803 18 4 16.28 4 14.23C4 12.18 5.55805 10.48 7.33583 10.48C7.33583 7.88 9.50312 6 12 6C14.4969 6 16.6941 8.17 16.6941 10.86V11.68H17.1036C18.7016 11.68 20 13.18 20 14.83C20 16.48 18.7016 18 17.1036 18H7.31586Z"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default SaveCloudIcon
