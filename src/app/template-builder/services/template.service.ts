import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { TemplateBlock, BlockType, BlockProps } from '../../design-system/models/block.models';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  // Signal holding array of blocks
  private blocksSignal: WritableSignal<TemplateBlock[]> = signal([]);
  
  // Signal for currently selected block ID 
  private selectedBlockIdSignal: WritableSignal<string | null> = signal(null);

  // Read-only signals for components to consume
  readonly blocks = this.blocksSignal.asReadonly();
  readonly selectedBlockId = this.selectedBlockIdSignal.asReadonly();
  
  readonly selectedBlock = computed(() => {
    const id = this.selectedBlockIdSignal();
    if (!id) return null;
    return this.blocksSignal().find(b => b.id === id) || null;
  });

  addBlock(type: BlockType): void {
    const newBlock: TemplateBlock = {
      id: crypto.randomUUID(),
      type,
      props: this.getDefaultProps(type)
    };
    
    this.blocksSignal.update(blocks => [...blocks, newBlock]);
    this.selectBlock(newBlock.id); 
  }

  removeBlock(id: string): void {
    this.blocksSignal.update(blocks => blocks.filter(b => b.id !== id));
    if (this.selectedBlockIdSignal() === id) {
      this.selectBlock(null);
    }
  }

  updateBlockProps(id: string, props: BlockProps): void {
    this.blocksSignal.update(blocks =>
      blocks.map(block =>
        block.id === id ? { ...block, props: { ...block.props, ...props } } : block
      )
    );
  }

  selectBlock(id: string | null): void {
    this.selectedBlockIdSignal.set(id);
  }

  private getDefaultProps(type: BlockType): BlockProps {
    switch (type) {
      case 'header':
        return {
          title: 'Welcome to Everlytic',
          logoUrl: '',
          bgColor: '#00B4D8'
        };
      case 'text':
        return {
          content: 'Enter your text content here. This is a sample paragraph that you can edit.',
          alignment: 'left'
        };
      case 'image':
        return {
          src: 'https://placehold.net/default.png',
          alt: 'Placeholder image',
          width: '100%'
        };
      case 'button':
        return {
          label: 'Click Here',
          url: '#',
          variant: 'primary'
        };
      default:
        return {};
    }
  }


  clearAll(): void {
    this.blocksSignal.set([]);
    this.selectBlock(null);
  }
}