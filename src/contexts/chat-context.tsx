import { createContext, useCallback, useContext, useState } from "react";
import { Message } from "../models/message";

type ChatContextType = {
  messages: Message[],
  push: (...messages: Message[]) => void
}

const ChatContext = createContext<ChatContextType>({
  messages: [],
  push: () => { }
})

export const useParticipants = () => useContext(ChatContext)

export const ChatProvider = ({ children }: { children: JSX.Element }) => {
  const [messages, setMessages] = useState<Message[]>([])

  const push = useCallback((...arr: Message[]) => {
    setMessages(messages => messages.concat(...arr))
  }, [setMessages])

  const contextValue: ChatContextType = {
    messages,
    push
  }

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContext
