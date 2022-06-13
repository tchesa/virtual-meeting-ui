import Apps from "../../assets/icons/apps"
import Participants from "../../assets/icons/participants"
import './participants-apps-selector.scss'

export type Option = 'participants' | 'apps'

type Props = {
  value?: Option,
  onChange?: (option: Option) => void
}

const ParticipantsAppsSelector = ({ value: option = 'apps', onChange }: Props) => {

  const handleSelectOption = (selectedOption: Option) => () => {
    if (selectedOption !== option) {
      onChange?.(selectedOption)
    }
  }

  const handleSelectParticipants = handleSelectOption('participants')
  const handleSelectApps = handleSelectOption('apps')

  return (
    <ul className={`participants-apps-selector ${option === 'apps' ? 'left' : 'right'}`}>
      <li className={`section-item ${option === 'participants' ? 'selected' : ''}`}>
        <button className="section-button" onClick={handleSelectParticipants}>
          <Participants />
          <span className="button-label">Participants</span>
        </button>
      </li>
      <li className={`section-item ${option === 'apps' ? 'selected' : ''}`}>
        <button className="section-button" onClick={handleSelectApps}>
          <Apps />
          <span className="button-label">Apps</span>
        </button>
      </li>
    </ul>
  )
}

export default ParticipantsAppsSelector
