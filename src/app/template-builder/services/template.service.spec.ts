import { TestBed } from '@angular/core/testing';
import { TemplateService } from './template.service';
import { BlockType } from '../../design-system/models/block.models';

describe('TemplateService', () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty blocks', () => {
    expect(service.blocks().length).toBe(0);
  });

  it('should add a header block with default props', () => {
    service.addBlock('header');
    
    const blocks = service.blocks();
    expect(blocks.length).toBe(1);
    expect(blocks[0].type).toBe('header');
    expect(blocks[0].props['title']).toBe('Welcome to Everlytic');
  });

  it('should remove a block by ID', () => {
    service.addBlock('text');
    const blockId = service.blocks()[0].id;
    
    service.removeBlock(blockId);
    
    expect(service.blocks().length).toBe(0);
    expect(service.selectedBlockId()).toBeNull();
  });

  it('should update block props reactively', () => {
    service.addBlock('button');
    const blockId = service.blocks()[0].id;
    
    service.updateBlockProps(blockId, { label: 'New Label', url: 'https://test.com' });
    
    const updatedBlock = service.blocks()[0];
    expect(updatedBlock.props['label']).toBe('New Label');
    expect(updatedBlock.props['url']).toBe('https://test.com');
  });

  it('should select and deselect blocks', () => {
    service.addBlock('image');
    const blockId = service.blocks()[0].id;
    
    service.selectBlock(blockId);
    expect(service.selectedBlockId()).toBe(blockId);
    expect(service.selectedBlock()?.id).toBe(blockId);
    
    service.selectBlock(null);
    expect(service.selectedBlockId()).toBeNull();
  });

  it('should auto-select newly added block', () => {
    service.addBlock('text');
    
    expect(service.selectedBlockId()).toBe(service.blocks()[0].id);
  });

  it('should clear all blocks', () => {
    service.addBlock('header');
    service.addBlock('button');
    
    service.clearAll();
    
    expect(service.blocks().length).toBe(0);
    expect(service.selectedBlockId()).toBeNull();
  });
});