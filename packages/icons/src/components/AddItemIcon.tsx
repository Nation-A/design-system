import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function AddItemIcon({ size = 24, color = 'white', ...props }: Props) {
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
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.25 8.5C11.25 8.08579 10.9142 7.75 10.5 7.75C10.0858 7.75 9.75 8.08579 9.75 8.5V9.75H8.5C8.08579 9.75 7.75 10.0858 7.75 10.5C7.75 10.9142 8.08579 11.25 8.5 11.25H9.75V12.5C9.75 12.9142 10.0858 13.25 10.5 13.25C10.9142 13.25 11.25 12.9142 11.25 12.5V11.25H12.5C12.9142 11.25 13.25 10.9142 13.25 10.5C13.25 10.0858 12.9142 9.75 12.5 9.75H11.25V8.5Z"
          fill={color}
        />
        <path
          id="Vector"
          d="M15.0334 5H5.96661C5.43277 5 5 5.43277 5 5.96661V15.0334C5 15.5672 5.43277 16 5.96661 16H15.0334C15.5672 16 16 15.5672 16 15.0334V5.96661C16 5.43277 15.5672 5 15.0334 5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector2"
          d="M19 8.5V18.13C19 18.61 18.61 19.01 18.12 19.01H8.48999"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default AddItemIcon
