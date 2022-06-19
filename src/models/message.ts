import { Participant } from "../models"

export type MessageType = 'text' | 'file'

export type MessageFile = {
  name: string,
  size: number
}

export interface BaseMessage {
  id: string,
  type: MessageType
  sender: Participant,
  createdAt: Date,
  private?: Participant
}

export interface TextMessage extends BaseMessage {
  type: 'text'
  message: string
}

export interface FileMessage extends BaseMessage {
  type: 'file',
  file: MessageFile
}

export type Message = TextMessage | FileMessage
