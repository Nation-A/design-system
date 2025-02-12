import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function AssetStoreIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M10.0001 6.99812C10.0001 5.89204 10.8917 5 12.0001 5C13.1084 5 14.0001 5.89204 14.0001 6.99812V7H10.0001V6.99812ZM8.00005 7V6.99812C8.00005 4.78629 9.78836 3 12.0001 3C14.2117 3 16.0001 4.78629 16.0001 6.99812V7H17.4372C18.3651 7 19.2541 7.68148 19.3252 8.70033L19.3255 8.70574L19.3255 8.70574L19.9829 18.9205C20.1495 20.0923 19.1757 21 18.1075 21H18.0975H5.8926C4.82439 21 3.85058 20.0923 4.01723 18.9205L4.67458 8.70574L4.67482 8.70191L4.67483 8.70191C4.74568 7.66316 5.64449 7 6.56287 7H8.00005ZM15.0001 9H9.00005H6.65978L6.01625 19H17.9839L17.3403 9H15.0001Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default AssetStoreIcon
