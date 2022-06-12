import Apps from "../../assets/icons/apps"
import Participants from "../../assets/icons/participants"
import Chat from "../chat"
import ParticipantsList from "../participants-list/participants-list"
import './participants-apps.scss'

export type Option = 'participants' | 'apps'

type Props = {
  option?: Option,
  onChange?: (option: Option) => void
}

const ParticipantsApps = ({ option = 'participants', onChange }: Props) => {

  const handleSelectOption = (selectedOption: Option) => () => {
    if (selectedOption !== option) {
      onChange?.(selectedOption)
    }
  }

  const handleSelectParticipants = handleSelectOption('participants')
  const handleSelectApps = handleSelectOption('apps')

  return (
    <div className="participants-apps">
      <div className="header">
        <ul className="section-selector">
          <li className={`section-item ${option === 'participants' ? 'selected' : ''}`}>
            <button className="section-button" onClick={handleSelectParticipants}>
              <Participants color={option === 'participants' ? 'white' : undefined} />
              <span className="button-label">Participants</span>
            </button>
          </li>
          <li className={`section-item ${option === 'apps' ? 'selected' : ''}`}>
            <button className="section-button" onClick={handleSelectApps}>
              <Apps color={option === 'apps' ? 'white' : undefined} />
              <span className="button-label">Apps</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="content participants">
        <ParticipantsList />
        <Chat />
      </div>
    </div>
  )
}

export default ParticipantsApps
