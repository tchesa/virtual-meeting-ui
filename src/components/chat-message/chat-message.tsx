import { memo } from "react"
import File from "../../assets/icons/file"
import { Message, MessageFile } from "../../models/message"
import { formatBits, formatTime } from "../../tools/format"
import "./chat-message.scss"

type Props = {
  message: Message,
  isYou?: boolean
}

const ChatMessage = ({ message, isYou = false }: Props) => (
  <div className={`chat-message${isYou ? ' chat-message--reversed' : ''}`}>
    <div className="chat-message-photo-container">
      <img className="chat-message-photo" src={message.sender.photo} alt={message.sender.name} />
    </div>
    <div className="chat-message-main-container">
      <div className="chat-message-header">
        <span className="chat-message-sender">
          From <strong className="chat-message-header-strong">{isYou ? 'you' : message.sender.name}</strong> to <strong className="chat-message-header-strong">{message.private ? message.private.name : 'Everyone'}</strong>
        </span>
        <span className="chat-message-time">{formatTime(message.createdAt)}</span>
      </div>
      {message.type === 'text' ? (
        <ChatMessageTextBody message={message.message} />
      ) : (
        <ChatMessageFileBody file={message.file} />
      )}
    </div>
  </div>
)

const ChatMessageTextBody = ({ message }: { message: string }) => (
  <div className="chat-message-body chat-message-body--text">{message}</div>
)

const ChatMessageFileBody = ({ file }: { file: MessageFile }) => (
  <div className="chat-message-body chat-message-body--file">
    <File className="chat-message-body--file-icon" />
    <div className="chat-message-body--file-details">
      <span className="chat-message-body--file-name">{file.name}</span>
      <span className="chat-message-body--file-size">{formatBits(file.size)}</span>
    </div>
  </div>
)

export default memo(ChatMessage)
