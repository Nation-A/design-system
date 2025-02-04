import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function RedoIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M16.2071 4.29289C15.8166 3.90237 15.1834 3.90237 14.7929 4.29289C14.4024 4.68342 14.4024 5.31658 14.7929 5.70711L16.5858 7.5H10.25C6.79772 7.5 4 10.2977 4 13.75C4 17.2023 6.79772 20 10.25 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18H10.25C7.90228 18 6 16.0977 6 13.75C6 11.4023 7.90228 9.5 10.25 9.5H16.5858L14.7929 11.2929C14.4024 11.6834 14.4024 12.3166 14.7929 12.7071C15.1834 13.0976 15.8166 13.0976 16.2071 12.7071L19.7071 9.20711C20.0976 8.81658 20.0976 8.18342 19.7071 7.79289L16.2071 4.29289Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default RedoIcon
