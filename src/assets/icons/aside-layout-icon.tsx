const AsideLayoutIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H14V21.5H7C4.79086 21.5 3 19.7091 3 17.5V7.5Z" fill={color} />
    <path d="M15 3.5H17.25C19.3211 3.5 21 5.17893 21 7.25H15V3.5Z" fill={color} />
    <path d="M15 8.25H21V12H15V8.25Z" fill={color} />
    <path d="M15 13H21V16.75H15V13Z" fill={color} />
    <path d="M15 17.75H21C21 19.8211 19.3211 21.5 17.25 21.5H15V17.75Z" fill={color} />
  </svg>
)

export default AsideLayoutIcon
