import { Meta, StoryObj } from '@storybook/angular';
import { HeaderBlockComponent } from './header-block.component';

export default {
  title: 'DesignSystem/HeaderBlock',
  component: HeaderBlockComponent,
} as Meta;

export const Default: StoryObj<HeaderBlockComponent> = {
  args: { 
    title: 'Welcome to Everlytic', 
    bgColor: '#00B4D8' 
  },
};

export const WithLogo: StoryObj<HeaderBlockComponent> = {
  args: { 
    title: 'Everlytic Newsletter', 
    logoUrl: 'https://placehold.net/default.png', 
    bgColor: '#2D3748' 
  },
};