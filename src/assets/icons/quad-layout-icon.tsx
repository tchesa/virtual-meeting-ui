const QuadLayoutIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H11.5V12H3V7.5Z" fill={color} />
    <path d="M3 13H11.5V21.5H7C4.79086 21.5 3 19.7091 3 17.5V13Z" fill={color} />
    <path d="M12.5 3.5H17C19.2091 3.5 21 5.29086 21 7.5V12H12.5V3.5Z" fill={color} />
    <path d="M12.5 13H21V17.5C21 19.7091 19.2091 21.5 17 21.5H12.5V13Z" fill={color} />
  </svg>
)

export default QuadLayoutIcon
