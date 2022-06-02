import { ReactNode } from "react"
import CameraFill from "../../assets/icons/camera-fill"
import MicrophoneMuted from "../../assets/icons/microphone-muted"
import { Participant, Role } from "../../models"
import Badge from "../badge/badge"
import './participants-list.scss'

const participantsMock: Participant[] = [
  {
    id: 'Natura',
    name: 'Natura',
    description: 'Project Manager',
    role: 'host',
  },
  {
    id: 'Cecile',
    name: 'Cecile',
    description: 'Software Developer',
    role: 'co-host'
  },
  {
    id: 'Nico',
    name: 'Nico',
    description: 'UI/UX Designer',
    role: 'participant'
  },
  {
    id: 'Bryan',
    name: 'Bryan',
    description: 'Ethical Hacker',
    role: 'participant'
  },
  {
    id: 'Azzura',
    name: 'Azzura',
    description: 'Team Leader',
    role: 'participant'
  },
  {
    id: 'Ahmed',
    name: 'Ahmed',
    description: 'UI/UX Designer',
    role: 'participant'
  }
]

const badgeByRole: {[role in Role]: ReactNode} = {
  'participant': <></>,
  'co-host': <Badge text="Co-Host" />,
  'host': <Badge text="Host" />
}

const ParticipantsList = () => {
  const participants = participantsMock

  return (
    <div className="participants-list">
      <ul className="list">
        {participants.map(participant => (
        <li className="participant-item" key={participant.id}>
          {/* <img className="participant-photo" /> */}
          <div className="participant-details">
            <span className="participant-name">{participant.name}</span>
            <span className="participant-description">{participant.description}</span>
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
