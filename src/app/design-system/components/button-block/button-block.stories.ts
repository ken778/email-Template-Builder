import { Meta, StoryObj } from '@storybook/angular';
import { ButtonBlockComponent } from './button-block.component';

export default {
  title: 'DesignSystem/ButtonBlock',
  component: ButtonBlockComponent,
} as Meta;

export const Primary: StoryObj<ButtonBlockComponent> = {
  args: { 
    label: 'Click Me', 
    url: '#', 
    variant: 'primary' 
  },
};

export const Secondary: StoryObj<ButtonBlockComponent> = {
  args: { 
    label: 'Learn More', 
    url: '#', 
    variant: 'secondary' 
  },
};