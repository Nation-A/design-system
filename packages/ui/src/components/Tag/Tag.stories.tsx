import type { Meta, StoryObj } from '@storybook/react';
import Tag from './index';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const DefaultTag: Story = {
  args: {
    text: 'Tag',
    onDeleteClick: () => console.log('Delete clicked'),
  },
};

export const TagWithBackground: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tag text="Neutral sm" color="neutral" onDeleteClick={() => console.log('Delete clicked')} />
      <Tag text="Black sm" color="black" onDeleteClick={() => console.log('Delete clicked')} />
      <Tag text="White sm" color="white" onDeleteClick={() => console.log('Delete clicked')} />
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tag text="Neutral full" color="neutral" radius="full" onDeleteClick={() => console.log('Delete clicked')} />
      <Tag text="Black full" color="black" radius="full" onDeleteClick={() => console.log('Delete clicked')} />
      <Tag text="White full" color="white" radius="full" onDeleteClick={() => console.log('Delete clicked')} />
    </div>
    </div>
  ),
};

export const TagWithNoBackground: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tag text="Neutral" background="off" color="neutral" onDeleteClick={() => console.log('Delete clicked')} />
      <Tag text="Black" background="off" color="black" onDeleteClick={() => console.log('Delete clicked')} />
      <Tag text="White" background="off" color="white" onDeleteClick={() => console.log('Delete clicked')} />
    </div>
  ),
};


export const TagWithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tag 
        text="Neutral Avatar" 
        imageSrc="https://placehold.co/32x32"
        color="neutral"
        onDeleteClick={() => console.log('Delete clicked')} 
      />
      <Tag 
        text="Black Avatar" 
        imageSrc="https://placehold.co/32x32"
        color="black"
        onDeleteClick={() => console.log('Delete clicked')} 
      />
      <Tag 
        text="White Avatar" 
        imageSrc="https://placehold.co/32x32"
        color="white"
        onDeleteClick={() => console.log('Delete clicked')} 
      />
    </div>
  ),
};
