import './badge.scss'

type Props = {
  text?: string
}

const Badge = ({ text = '' }: Props) => (
  <span className='badge'>{text}</span>
)

export default Badge
