import { ChangeEventHandler, FormEventHandler, useContext, useRef, useState } from 'react'
import AttachIcon from '../../assets/icons/attach'
import SendIcon from '../../assets/icons/send'
import SmileIcon from '../../assets/icons/smile'
import ChatContext from '../../contexts/chat-context'
import ParticipantsContext from '../../contexts/participants-context'
import ChatMessage from '../chat-message/chat-message'
import './index.scss'

const Chat = () => {
  const [messageInput, setMessageInput] = useState<string>('')
  const { messages, push } = useContext(ChatContext)
  const { sessionUser, participants } = useContext(ParticipantsContext)
  const chatMessagesRef = useRef<HTMLDivElement>(null)

  const handleMessageInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMessageInput(event.target.value)
  }

  const scrollEnd = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTo({
        'top': chatMessagesRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  const handleSendMessage: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    push({
      id: new Date().getTime().toString(),
      type: 'text',
      message: messageInput,
      sender: sessionUser,
      createdAt: new Date(),
    })
    setMessageInput('')

    setTimeout(() => {
      scrollEnd()
    }, 100)
  }

  return (
    <div className="chat-container">
      <div className="chat-header">Chats ({(participants || []).length + 1})</div>
      <div className="chat-list" ref={chatMessagesRef}>
        <div className="chat-list-inner">
          {messages.map(message => (
            <ChatMessage
              key={message.id}
              message={message}
              isYou={message.sender.id === sessionUser.id}
            />
          ))}
        </div>
      </div>
      <div className="chat-footer">
        <div className="chat-footer-header">
          <div className="chat-footer-rooms">

          </div>
          <div className="chat-footer-options">
            <button type="button">
              <AttachIcon />
            </button>
            <button type="button">
              <SmileIcon />
            </button>
          </div>
        </div>
        <form className="chat-footer-form" onSubmit={handleSendMessage}>
          <input type="text" placeholder="Type to everyone..." value={messageInput} onChange={handleMessageInput} />
          <button type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
