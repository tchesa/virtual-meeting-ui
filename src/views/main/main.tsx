import { useState } from 'react'
import LayoutSelector, { Layout } from '../../components/layout-selector/layout-selector'
import ParticipantsApps, { Option } from '../../components/participants-apps/participants-apps'
import Protected from '../../components/protected/protected'
import Timer from '../../components/timer/timer'
import TransmissionControllers from '../../components/transmission-controllers/transmission-controllers'
import VolumeSlider from '../../components/volume-slider/volume-slider'
import './main.scss'

const Main = () => {
  const [layout, setLayout] = useState<Layout>(Layout.GRID)
  const [sidebarSection, setSidebarSection] = useState<Option>('participants')
  const [startedAt] = useState(new Date())
  const [volume, setVolume] = useState<number>(.5)

  return <div className="main-container">
    <div className="meeting-col">
      <div className="meeting-header">
        <Protected />
        <LayoutSelector value={layout} onChange={setLayout} />
        <Timer startedAt={startedAt} />
      </div>
      <div className="meeting-content">

      </div>
      <div className="meeting-footer">
        <VolumeSlider value={volume} onChange={setVolume} />
        <TransmissionControllers />
        <button>Leave Meeting</button>
      </div>
    </div>
    <div className="side-col">
      <ParticipantsApps option={sidebarSection} onChange={setSidebarSection} />
    </div>
  </div>
}

export default Main
