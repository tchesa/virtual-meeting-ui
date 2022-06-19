export const formatTime = (date: Date) =>
  `${date.getHours()%12}:${date.getMinutes()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`

export const formatBits = (bits: number) => {
  if (bits < 8) return `${bits} bits`

  const b = Math.floor(bits / 8)
  if (b < 1024) return `${b} b`

  const kb = Math.floor(b / 1024)
  if (kb < 1024) return `${kb} Kb`

  const mb = Math.floor(kb / 1024)
  if (mb < 1024) return `${mb} Mb`

  const gb = Math.floor(mb / 1024)
  if (gb <= 999) return `${gb} Gb`

  return '+999 Gb'
}
