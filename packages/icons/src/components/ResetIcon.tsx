import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function ResetIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M11 20C7.61 19.5071 5 16.58 5 13.0293C5 11.0578 5.8 9.27745 7.1 8"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4571 4.20711C13.8476 3.81658 13.8476 3.18342 13.4571 2.79289C13.0666 2.40237 12.4334 2.40237 12.0429 2.79289L9.54289 5.29289C9.15237 5.68342 9.15237 6.31658 9.54289 6.70711L12.0429 9.20711C12.4334 9.59763 13.0666 9.59763 13.4571 9.20711C13.8476 8.81658 13.8476 8.18342 13.4571 7.79289L12.7051 7.04084C15.6896 7.38902 18 9.92084 18 13C18 15.7155 16.1924 18.0142 13.7148 18.7515C13.1854 18.9091 12.884 19.4659 13.0415 19.9952C13.1991 20.5246 13.7559 20.826 14.2852 20.6685C17.5876 19.6858 20 16.6245 20 13C20 8.79286 16.7619 5.35011 12.6391 5.02509L13.4571 4.20711Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default ResetIcon
