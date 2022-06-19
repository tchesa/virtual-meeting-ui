import { SVGProps } from "react"

const Chevron = ({ color = '#9CA3AF', ...props }: SVGProps<SVGSVGElement>) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.99463 2.87504C5.89704 2.87646 5.80386 2.91587 5.73486 2.9849L0.859861 7.8599C0.823871 7.89446 0.795139 7.93584 0.775345 7.98164C0.755551 8.02744 0.745095 8.07673 0.744587 8.12662C0.74408 8.17651 0.753532 8.226 0.772391 8.27219C0.791249 8.31838 0.819135 8.36034 0.854414 8.39562C0.889693 8.4309 0.931657 8.45879 0.977848 8.47764C1.02404 8.4965 1.07353 8.50595 1.12342 8.50545C1.17331 8.50494 1.2226 8.49448 1.26839 8.47469C1.31419 8.4549 1.35558 8.42616 1.39013 8.39017L6 3.78031L10.6099 8.39017C10.6444 8.42616 10.6858 8.4549 10.7316 8.47469C10.7774 8.49448 10.8267 8.50494 10.8766 8.50545C10.9265 8.50595 10.976 8.4965 11.0221 8.47764C11.0683 8.45878 11.1103 8.4309 11.1456 8.39562C11.1809 8.36034 11.2087 8.31838 11.2276 8.27219C11.2465 8.226 11.2559 8.17651 11.2554 8.12662C11.2549 8.07673 11.2444 8.02744 11.2247 7.98164C11.2049 7.93584 11.1761 7.89446 11.1401 7.8599L6.26514 2.9849C6.22968 2.94943 6.18748 2.92143 6.14101 2.90256C6.09455 2.88369 6.04477 2.87433 5.99463 2.87504Z" fill={color} />
  </svg>
)

export default Chevron
