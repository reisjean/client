import { ComponentStory, ComponentMeta } from '@storybook/react'

import FirstComponent from '.'

export default {
  title: 'teste/FirstComponent',
  component: FirstComponent
} as ComponentMeta<typeof FirstComponent>

const Template: ComponentStory<typeof FirstComponent> = (args) => (
  <FirstComponent {...args} />
)

export const Center = Template.bind({})
Center.args = {
  title: 'whatever title here',
  description: 'description here',
  cPosition: 'center'
}

export const Right = Template.bind({})
Right.args = {
  title: 'eu vou pra direita',
  description: 'pou',
  cPosition: 'right'
}
