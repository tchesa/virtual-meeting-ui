import Speaker from '../../assets/icons/speaker'
import './volume-slider.scss'

type Props = {
  value?: number,
  onChange?: (newValue: number) => void
}

const VolumeSlider = ({ value = 0, onChange }: Props) => {
  return (
    <div className="volume-slider">
      <Speaker />
    </div>
  )
}

export default VolumeSlider
