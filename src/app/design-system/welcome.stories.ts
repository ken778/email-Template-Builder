import { Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Welcome',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const ToTheDesignSystem: StoryObj = {
  render: () => ({
    template: `
      <div style="font-family: sans-serif; text-align: center; padding: 40px;">
        <h1 style="color: #00B4D8;">Welcome to Everlytic Design System</h1>
        <p>This Storybook contains the reusable components for the Email Template Builder.</p>
        <h3>Components</h3>
        <ul style="text-align: left; display: inline-block;">
          <li><strong>HeaderBlock:</strong> Email header with logo and title</li>
          <li><strong>TextBlock:</strong> Configurable text paragraph</li>
          <li><strong>ImageBlock:</strong> Responsive image block</li>
          <li><strong>ButtonBlock:</strong> CTA button with variants</li>
        </ul>
        <h3>Getting Started</h3>
        <p>Run <code>ng serve</code> to access the full Template Builder.</p>
      </div>
    `,
  }),
};