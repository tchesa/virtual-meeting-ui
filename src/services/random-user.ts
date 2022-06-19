import { Participant, Role } from '../models'

type RandomUser = {
  cell: string
  dob: {
    age: number
    date: string
  }
  email: string
  gender: string
  id: {
    name: string
    value: null
  }
  location: {
    city: string
    coordinates: {
      latitude: string
      longitude: string
    }
    country: string
    postcode: string
    state: string
    street: {
      number: number
      name: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  login: {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
  }
  name: {
    first: string
    last: string
    title: string
  }
  nat: string
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  registered: {
    age: number
    date: string
  }
}

type GetUsersResponse = {
  info: {
    page: number
    results: number
    seed: string
    version: string
  },
  results: RandomUser[]
}

export const getUsers = async ({ results }: {
  results: number
}): Promise<Participant[]> => {
  const response = await fetch(`https://randomuser.me/api/?results=${results}`)
  const json = await response.json() as GetUsersResponse
  const roles: Role[] = ['host', 'co-host', 'participant']
  const descriptions = ['Project Manager', 'Software Developer', 'UI/UX Designer', 'Ethical Hacker', 'Team Leader']

  return json.results.map<Participant>(user => ({
    id: user.login.uuid,
    name: [user.name.first, user.name.last].join(' '),
    role: roles[Math.floor(Math.random() * roles.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    photo: user.picture.large
  }))
}
