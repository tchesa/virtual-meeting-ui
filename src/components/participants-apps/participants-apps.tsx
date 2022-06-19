import Chat from "../chat"
import ParticipantsAppsSelector, { Option } from "../participants-apps-selector/participants-apps-selector"
import ParticipantsList from "../participants-list/participants-list"
import './participants-apps.scss'

type Props = {
  option?: Option,
  onChange?: (option: Option) => void
}

const ParticipantsApps = ({ option = 'participants', onChange }: Props) => {
  return (
    <div className="participants-apps">
      <div className="header">
        <ParticipantsAppsSelector value={option} onChange={onChange} />
      </div>
      <div className="content participants">
        <ParticipantsList />
        <Chat />
      </div>
    </div>
  )
}

export default ParticipantsApps
