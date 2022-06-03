import { ReactNode } from "react"
import CameraFill from "../../assets/icons/camera-fill"
import MicrophoneMuted from "../../assets/icons/microphone-muted"
import { useParticipants } from "../../contexts/participants-context"
import { Role } from "../../models"
import Badge from "../badge/badge"
import './participants-list.scss'

const badgeByRole: { [role in Role]: ReactNode } = {
  'participant': <></>,
  'co-host': <Badge text="Co-Host" />,
  'host': <Badge text="Host" />
}

const roleOrder = (role: Role) => {
  if (role === 'host') return 1
  if (role === 'co-host') return 2
  return 3
}

const ParticipantsList = () => {
  const { participants } = useParticipants()

  const sortedParticipants = (participants || []).sort((a, b) => {
    return roleOrder(a.role) - roleOrder(b.role)
  })

  return (
    <div className="participants-list">
      <ul className="list">
        {sortedParticipants.map(participant => (
          <li className="participant-item" key={participant.id}>
            <img className="participant-photo" alt={participant.name} src={participant.photo} />
            <div className="participant-details">
              <span className="participant-name">{participant.name}</span>
              {participant.description && <span className="participant-description">{participant.description}</span>}
            </div>
            {badgeByRole[participant.role]}
            <button className={`control-button ${false ? 'active' : ''}`}>
              <MicrophoneMuted />
            </button>
            <button className={`control-button ${true ? 'active' : ''}`}>
              <CameraFill />
            </button>
          </li>
        ))}
      </ul>
      <div className="footer">
        <button>Invite</button>
        <button>Mute all</button>
        <button>Ask to start video</button>
      </div>
    </div>
  )
}

export default ParticipantsList
