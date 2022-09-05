import { ComponentStory, ComponentMeta } from '@storybook/react'

import FirstComponent from '.'

export default {
  title: 'FirstComponent',
  component: FirstComponent
} as ComponentMeta<typeof FirstComponent>

const Template: ComponentStory<typeof FirstComponent> = (args) => (
  <FirstComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'whatever title here',
  description: 'description here',
  cPosition: 'center'
}
