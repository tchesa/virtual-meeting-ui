import { useState } from 'react'
import LayoutSelector, { Layout } from '../../components/layout-selector/layout-selector'
import Timer from '../../components/timer/timer'
import './main.scss'

const Main = () => {
  const [layout, setLayout] = useState<Layout>(Layout.GRID)
  const [startedAt] = useState(new Date())

  return <div className="main-container">
    <div className="meeting-col">
      <div className="meeting-header">
        <LayoutSelector value={layout} onChange={setLayout} />
        <Timer startedAt={startedAt} />
      </div>
      <div className="meeting-content">

      </div>
      <div className="meeting-footer">

      </div>
    </div>
    <div className="side-col">
      <div className="side-header">

      </div>
      <div className="side-content">

      </div>
    </div>
  </div>
}

export default Main
