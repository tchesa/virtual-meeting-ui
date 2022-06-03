export type Role = 'participant' | 'host' | 'co-host'

export type Participant = {
  id: string,
  name: string,
  description?: string,
  photo?: string,
  role: Role,
  verified?: boolean
}
