import { HTMLProps } from 'react'
import { Participant } from '../../../models'
import './participant-player.scss'

type Props = HTMLProps<HTMLDivElement> & {
  participant: Participant
}

const ParticipantPlayer = ({ participant, ...props }: Props) => {
  return (
    <div className="participant-player" {...props}>
      <img alt={participant.name} src={participant.photo} />
      <span className="name">{participant.name}</span>
    </div>
  )
}

export default ParticipantPlayer
