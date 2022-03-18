import InputRange, { Range } from 'react-input-range'
import Speaker from '../../assets/icons/speaker'
import 'react-input-range/lib/css/index.css'
import './volume-slider.scss'
import SpeakerFull from '../../assets/icons/speaker-full'
import SpeakerOff from '../../assets/icons/speaker-off'

type Props = {
  value?: number,
  onChange?: (value: number) => void
}

const iconByVolume = (volume: number) => {
  if (volume > .7) return <SpeakerFull />
  else if (volume === 0) return <SpeakerOff />
  return <Speaker />
}

const VolumeSlider = ({ value = 0, onChange }: Props) => {

  const handleChange = (output: number | Range) => {
    onChange?.(typeof output === 'number' ? output : output.max)
  }

  return (
    <div className="volume-slider">
      {iconByVolume(value)}
      <InputRange value={value} onChange={handleChange} minValue={0} maxValue={1} step={0.1} />
    </div>
  )
}

export default VolumeSlider
