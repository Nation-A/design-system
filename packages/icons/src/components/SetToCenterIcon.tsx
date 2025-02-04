import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function SetToCenterIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
          fill={color}
        />
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3C12.5523 3 13 3.44772 13 4V5.07089C16.0657 5.5094 18.4906 7.93431 18.9291 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H18.9291C18.4906 16.0657 16.0657 18.4906 13 18.9291V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18.9291C7.93431 18.4906 5.5094 16.0657 5.07089 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5.07089C5.5094 7.93431 7.93431 5.5094 11 5.07089V4C11 3.44772 11.4477 3 12 3ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default SetToCenterIcon
