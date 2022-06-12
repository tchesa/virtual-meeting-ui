import { FormEventHandler } from 'react'
import AttachIcon from '../../assets/icons/attach'
import SendIcon from '../../assets/icons/send'
import SmileIcon from '../../assets/icons/smile'
import './index.scss'

const Chat = () => {

  const handleSendMessage: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  return (
    <div className="chat-container">
      <div className="chat-header">Chats (3)</div>
      <div className="chat-list">
        list
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
          <input type="text" placeholder="Type to everyone..." />
          <button type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
