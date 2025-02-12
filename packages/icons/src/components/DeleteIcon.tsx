import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function DeleteIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M10 3H14C14.5523 3 15 3.44772 15 4V5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7V18.09C19 19.7483 17.6051 21 16 21H8C6.39143 21 5 19.735 5 18.09V7C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H9V4C9 3.44772 9.44772 3 10 3ZM14 7H10H7V18.09C7 18.545 7.40857 19 8 19H16C16.5949 19 17 18.5517 17 18.09V7H14Z"
          fill={color}
        />
        <path id="Vector" d="M14 10V16" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
        <path id="Vector2" d="M10 10V16" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default DeleteIcon
