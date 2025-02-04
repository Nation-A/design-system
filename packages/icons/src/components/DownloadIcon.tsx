import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function DownloadIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11.5858L8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289C6.90237 9.68342 6.90237 10.3166 7.29289 10.7071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.7071 10.7071C17.0976 10.3166 17.0976 9.68342 16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L13 11.5858V6Z"
          fill={color}
        />
        <path
          id="Vector"
          d="M19 16.01V18C19 18.56 18.61 19.01 18.12 19.01H5.88C5.4 19.01 5 18.56 5 18V16.01"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default DownloadIcon
