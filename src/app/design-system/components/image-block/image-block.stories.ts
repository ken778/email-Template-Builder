import { Meta, StoryObj } from '@storybook/angular';
import { ImageBlockComponent } from './image-block.component';

export default {
  title: 'DesignSystem/ImageBlock',
  component: ImageBlockComponent,
} as Meta;

export const Default: StoryObj<ImageBlockComponent> = {
  args: { 
    src: 'https://via.placeholder.com/600x200', 
    alt: 'Placeholder Image', 
    width: '100%' 
  },
};

export const CustomWidth: StoryObj<ImageBlockComponent> = {
  args: { 
    src: 'https://via.placeholder.com/300x200', 
    alt: 'Smaller Image', 
    width: '50%' 
  },
};