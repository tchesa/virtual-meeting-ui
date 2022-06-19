import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Participant } from "../models";
import { Message } from "../models/message";
import { getUsers } from "../services/random-user";
import ChatContext from "./chat-context";

type ParticipantsContextType = {
  participants?: Participant[],
  sessionUser: Participant
  loading: boolean
}

export const SESSION_USER_ID = 'session_user_id'

const FAKE_USER: Participant = {
  id: '', name: '', role: 'participant'
}

const partialSessionUser: Participant = {
  ...FAKE_USER,
  id: SESSION_USER_ID,
}

const ParticipantsContext = createContext<ParticipantsContextType>({
  loading: false,
  sessionUser: partialSessionUser,
})

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'text',
    createdAt: new Date(),
    message: 'Hi there, how are you?',
    sender: FAKE_USER
  },
  {
    id: '2',
    type: 'text',
    createdAt: new Date(),
    message: 'I am great, Thanks!\nHow are you?',
    sender: partialSessionUser
  },
  {
    id: '3',
    type: 'text',
    createdAt: new Date(),
    message: 'Fine thanks. Can you send me my newest workout schedule?',
    sender: FAKE_USER
  },
  {
    id: '4',
    type: 'file',
    createdAt: new Date(),
    file: {
      name: 'workout schedule.xlsx',
      size: 352256,
    },
    sender: partialSessionUser
  },
  // {
  //   id: '5',
  //   type: 'text',
  //   createdAt: new Date(),
  //   message: 'Hi there, how are you?',
  //   sender: FAKE_USER
  // },
  // {
  //   id: '6',
  //   type: 'text',
  //   createdAt: new Date(),
  //   message: 'I am great, Thanks!\nHow are you?',
  //   sender: sessionUser
  // },
  // {
  //   id: '7',
  //   type: 'text',
  //   createdAt: new Date(),
  //   message: 'Fine thanks. Can you send me my newest workout schedule?',
  //   sender: FAKE_USER
  // },
  // {
  //   id: '8',
  //   type: 'file',
  //   createdAt: new Date(),
  //   file: {
  //     name: 'workout schedule.xlsx',
  //     size: 352256,
  //   },
  //   sender: sessionUser
  // }
]

export const useParticipants = () => useContext(ParticipantsContext)

export const ParticipantsProvider = ({ children }: { children: JSX.Element }) => {
  const [participants, setParticipants] = useState<Participant[]>()
  const [sessionUser, setSessionUser] = useState<Participant>({
    ...FAKE_USER,
    id: SESSION_USER_ID,
  })
  const { push } = useContext(ChatContext)

  const contextValue: ParticipantsContextType = {
    participants,
    loading: false,
    sessionUser,
  }

  const fetchParticipants = useCallback(async () => {
    const fetchedParticipants = await getUsers({ results: 16 })

    const replaceByUserIndex = Math.floor(Math.random() * fetchedParticipants.length)
    fetchedParticipants[replaceByUserIndex] = {
      ...fetchedParticipants[replaceByUserIndex],
      id: SESSION_USER_ID
    }

    setParticipants(fetchedParticipants)
    setSessionUser(fetchedParticipants[replaceByUserIndex])

    push(...INITIAL_MESSAGES.map(message => {
      const participant = message.sender === FAKE_USER
        ? fetchedParticipants[Math.floor(Math.random() * fetchedParticipants.length)]
        : fetchedParticipants[replaceByUserIndex]

      return {
        ...message,
        sender: participant
      }
    }))
  }, [push])

  useEffect(() => {
    fetchParticipants()
  }, [fetchParticipants])

  return (
    <ParticipantsContext.Provider value={contextValue}>
      {children}
    </ParticipantsContext.Provider>
  )
}

export default ParticipantsContext
