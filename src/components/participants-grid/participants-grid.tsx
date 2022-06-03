import { useParticipants } from '../../contexts/participants-context'
import ParticipantPlayer from '../layout-selector/participant-player/participant-player'
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

const ParticipantsView = ({ layout = DEFAULT_LAYOUT }: Props) => {
  const { participants = [] } = useParticipants()

  return (
    <div className="participants-grid-container">
      <div className="participants-grid">
        {participants.map(participant => (
          <ParticipantPlayer key={participant.id} participant={participant} />
        ))}
      </div>
    </div>
  )
}

export default ParticipantsView
