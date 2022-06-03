import { Participant } from '../../../models'
import './participant-player.scss'

type Props = {
  participant: Participant
}

const ParticipantPlayer = ({ participant }: Props) => {
  return (
    <div className="participant-player">
      <img alt={participant.name} src={participant.photo} />
      <span className="name">{participant.name}</span>
    </div>
  )
}

export default ParticipantPlayer
