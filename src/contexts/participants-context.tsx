import { createContext, useContext, useState, useEffect } from "react";
import { Participant } from "../models";
import { getUsers } from "../services/random-user";

type ParticipantsContextType = {
  participants?: Participant[],
  loading: boolean
}

const ParticipantsContext = createContext<ParticipantsContextType>({
  loading: false
})

export const useParticipants = () => useContext(ParticipantsContext)

export const ParticipantsProvider = ({ children }: { children: JSX.Element }) => {
  const [participants, setParticipants] = useState<Participant[]>()

  const contextValue: ParticipantsContextType = {
    participants,
    loading: false,
  }

  const fetchParticipants = async () => {
    const fetchedParticipants = await getUsers({ results: 16 })
    setParticipants(fetchedParticipants)
  }

  useEffect(() => {
    fetchParticipants()
  }, [])

  return (
    <ParticipantsContext.Provider value={contextValue}>
      {children}
    </ParticipantsContext.Provider>
  )
}

export default ParticipantsContext
