import { useEffect, useState } from "react"
import './timer.scss'

type Props = { startedAt?: Date }

const calculateDateDiff = (a: Date) =>
  new Date().getTime() - a.getTime()

const clamp = (n: number, size: number = 0) => {
  const s = n.toString()
  let final = s;

  for (let i = s.length; i < size; i++) {
    final = '0' + final
  }

  return final
}

const formatSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  return `${hours}:${clamp(minutes % 60, 2)}:${clamp(seconds % 60, 2)}`
}

const Timer = ({ startedAt }: Props) => {
  const [seconds, setSeconds] = useState<number>(startedAt ? calculateDateDiff(startedAt) : 0)
  const formatted = formatSeconds(seconds)

  useEffect(() => {
    if (startedAt) {
      const diff = calculateDateDiff(startedAt)
      setSeconds(diff)

      const key = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)

      return () => {
        clearInterval(key)
      }
    } else {
      setSeconds(0)
    }
  }, [startedAt])

  return (
    <div className="timer">
      <div className="timer-icon">
        <div className="timer-icon-inner" />
      </div>
      <span className="timer-label">{formatted}</span>
    </div>
  )
}

export default Timer
