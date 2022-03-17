import { ReactNode } from "react"
import AsideLayoutIcon from "../../assets/icons/aside-layout-icon"
import FullscreenLayoutIcon from "../../assets/icons/fullscreen-layout-icon"
import GridLayoutIcon from "../../assets/icons/grid-layout-icon"
import QuadLayoutIcon from "../../assets/icons/quad-layout-icon"
import './layout-selector.scss'

export enum Layout {
  GRID = 'grid',
  ASIDE = 'aside',
  QUAD = 'quad',
  FULLSCREEN = 'fullscreen'
}

type Props = {
  value?: Layout
  onChange?: (value: Layout) => void
}

const iconByLayout: {[layout in Layout]: () => ReactNode } = {
  [Layout.GRID]: () => <GridLayoutIcon />,
  [Layout.ASIDE]: () => <AsideLayoutIcon />,
  [Layout.QUAD]: () => <QuadLayoutIcon />,
  [Layout.FULLSCREEN]: () => <FullscreenLayoutIcon />
}

const LayoutSelector = ({ value, onChange }: Props) => {
  return (
    <ul className="layout-selector">
      {Object.values(Layout).map(layout => (
        <li className={`layout-selector-item ${value === layout ? 'selected' : ''}`}>
          <button
            className="layout-selector-button"
            onClick={() => {
              if (layout !== value) {
                onChange?.(layout)
              }
            }}>
            {iconByLayout[layout]()}
          </button>
          <hr />
        </li>
      ))}
    </ul>
  )
}

export default LayoutSelector
