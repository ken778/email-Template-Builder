export type BlockType = 'header' | 'text' | 'image' | 'button';
export type TextAlignment = 'left' | 'center' | 'right';
export type ButtonVariant = 'primary' | 'secondary';

export interface BlockProps {
  // HeaderBlock
  title?: string;
  logoUrl?: string;
  bgColor?: string;
  
  // TextBlock
  content?: string;
  alignment?: TextAlignment;
  
  // ImageBlock
  src?: string;
  alt?: string;
  width?: string;
  
  // ButtonBlock
  label?: string;
  url?: string;
  variant?: ButtonVariant;
  [key: string]: any;
}

export interface TemplateBlock {
  id: string;
  type: BlockType;
  props: BlockProps;
}