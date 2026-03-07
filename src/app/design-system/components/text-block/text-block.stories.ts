import { Meta, StoryObj } from '@storybook/angular';
import { TextBlockComponent } from './text-block.component';

export default {
  title: 'DesignSystem/TextBlock',
  component: TextBlockComponent,
} as Meta;

export const Default: StoryObj<TextBlockComponent> = {
  args: { 
    content: 'This is a sample text block. You can edit this content in the sidebar.', 
    alignment: 'left' 
  },
};

export const CenterAligned: StoryObj<TextBlockComponent> = {
  args: { 
    content: 'This text is centered for emphasis.', 
    alignment: 'center' 
  },
};

export const RightAligned: StoryObj<TextBlockComponent> = {
  args: { 
    content: 'This text is right aligned.', 
    alignment: 'right' 
  },
};