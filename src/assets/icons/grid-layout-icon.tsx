const GridLayoutIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H8.33333V8.83333H3V7.5Z" fill={color}/>
    <path d="M3 9.83333H8.33333V15.1667H3V9.83333Z" fill={color}/>
    <path d="M3 16.1667H8.33333V21.5H7C4.79086 21.5 3 19.7091 3 17.5V16.1667Z" fill={color}/>
    <path d="M9.33333 3.5H14.6667V8.83333H9.33333V3.5Z" fill={color}/>
    <path d="M9.33333 9.83333H14.6667V15.1667H9.33333V9.83333Z" fill={color}/>
    <path d="M9.33333 16.1667H14.6667V21.5H9.33333V16.1667Z" fill={color}/>
    <path d="M15.6667 3.5H17C19.2091 3.5 21 5.29086 21 7.5V8.83333H15.6667V3.5Z" fill={color}/>
    <path d="M15.6667 9.83333H21V15.1667H15.6667V9.83333Z" fill={color}/>
    <path d="M15.6667 16.1667H21V17.5C21 19.7091 19.2091 21.5 17 21.5H15.6667V16.1667Z" fill={color}/>
  </svg>
)

export default GridLayoutIcon
