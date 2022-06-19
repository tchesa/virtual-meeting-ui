import { CSSProperties, useEffect, useRef, useState } from 'react'
import { useParticipants } from '../../contexts/participants-context'
import ParticipantPlayer from '../layout-selector/participant-player/participant-player'
import Paginator from '../paginator/paginator'
import './participants-grid.scss'

export enum Layout {
  GRID = 'grid',
  ASIDE = 'aside',
  QUAD = 'quad',
  FULLSCREEN = 'fullscreen'
}

export const DEFAULT_LAYOUT = Layout.GRID

type Props = {
  layout?: Layout
}

const participantWidth = 248
const participantHeight = (248 / 4) * 3 // 75%
const chatColWidth = 328
const gridGap = 8
const gridPadding = 24
const headerHeight = 81
const footerHeight = 103
const gridBottomMargin = 28

const calculateColsNumber = () => {
  const availableSpace = window.innerWidth - chatColWidth - gridPadding * 2
  const participantSpace = participantWidth + gridGap
  const cols = Math.floor(availableSpace / participantSpace)

  return cols < 1 ? 1 : cols
}

const calculateRowsNumber = () => {
  const availableSpace = window.innerHeight - headerHeight - footerHeight - gridBottomMargin - gridPadding * 2
  const participantSpace = participantHeight + gridGap
  const rows = Math.floor(availableSpace / participantSpace)

  return rows < 1 ? 1 : rows
}

const ParticipantsView = ({ layout = DEFAULT_LAYOUT }: Props) => {
  const { participants = [] } = useParticipants()
  const rootRef = useRef<HTMLDivElement>(null)
  const [gridCols, setGridCols] = useState<number>(calculateColsNumber)
  const [gridRows, setGridRows] = useState<number>(calculateRowsNumber)
  const [page, setPage] = useState<number>(0)

  const handleResize = () => {
    const cols = calculateColsNumber()
    const rows = calculateRowsNumber()

    setGridCols(cols)
    setGridRows(rows)
  }

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [rootRef])

  const paginatedParticipants = participants.slice(
    gridCols * gridRows * page,
    gridCols * gridRows * page + gridCols * gridRows
  )

  const pages = Math.ceil(participants.length / (gridCols * gridRows))

  const gridStyle: CSSProperties = {
    gridTemplateColumns: new Array(gridCols).fill('1fr').join(' '),
    gridTemplateRows: new Array(gridRows).fill('1fr').join(' '),
  }

  // const gridItemStyle: CSSProperties = {
  //   width: participantWidth,
  //   paddingTop: `${(participantHeight / participantWidth) * 100}%`
  // }

  return (
    <div className="participants-grid-container" ref={rootRef}>
      <div className="participants-grid" style={gridStyle}>
        {paginatedParticipants.map(participant => (
          <ParticipantPlayer
            key={participant.id}
            participant={participant}
          // style={gridItemStyle}
          />
        ))}
      </div>
      {pages > 1 && <Paginator pages={pages} current={page} onChange={setPage} />}
    </div>
  )
}

export default ParticipantsView
