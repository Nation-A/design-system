import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function LockIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M12 3C9.23858 3 7 5.23858 7 8V9H6.75C5.687 9 5 9.92252 5 10.8333V19.1667C5 20.0775 5.687 21 6.75 21H17.25C18.313 21 19 20.0775 19 19.1667V10.8333C19 9.92252 18.313 9 17.25 9H17V8C17 5.23858 14.7614 3 12 3ZM15 9V8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V9H15ZM7 11V19H17V11H16H8H7Z"
          fill={color}
        />
        <circle id="Ellipse 68" cx="12" cy="15" r="1.5" fill={color} />
      </g>
    </svg>
  )
}

export default LockIcon
