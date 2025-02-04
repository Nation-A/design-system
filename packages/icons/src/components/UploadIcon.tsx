import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
}

function UploadIcon({ size = 24, color = 'white', ...props }: Props) {
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
          d="M19.0002 10.2475V18.1288C19.0002 18.6094 18.61 19 18.1296 19H5.87087C5.39052 19 5.00024 18.6094 5.00024 18.1288V5.87124C5.00024 5.39056 5.39052 5 5.87087 5H13.7465"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector2"
          d="M7.41802 17.0001H16.5073C16.886 17.0001 17.1053 16.5901 16.8661 16.3101L14.1752 13.1601C13.9858 12.9401 13.637 12.9501 13.4576 13.1701L11.4643 15.6601C11.275 15.9001 10.8963 15.8901 10.7169 15.6401L9.61061 14.0801C9.43122 13.8301 9.0525 13.8201 8.86314 14.0601L7.05923 16.3101C6.83001 16.5901 7.04927 16.9901 7.42799 16.9901L7.41802 17.0001Z"
          fill={color}
        />
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 3C20 2.44772 19.5523 2 19 2C18.4477 2 18 2.44772 18 3V4H17C16.4477 4 16 4.44772 16 5C16 5.55228 16.4477 6 17 6H18V7C18 7.55228 18.4477 8 19 8C19.5523 8 20 7.55228 20 7V6H21C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H20V3Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default UploadIcon
