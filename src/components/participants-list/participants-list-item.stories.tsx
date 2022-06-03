import { Meta } from '@storybook/react'
import { ParticipantsListItem } from './participants-list'

const meta: Meta = {
  title: 'Participants List Item',
  component: ParticipantsListItem
}

export default meta

export const Default = () => <ParticipantsListItem participant={{
  id: '1',
  name: 'Arnas Sandmo',
  photo: 'https://randomuser.me/api/portraits/men/86.jpg',
  role: 'participant'
}} />
