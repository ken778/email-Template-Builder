import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateService } from '../../services/template.service';
import { TemplateBlock, BlockType, BlockProps } from '../../../design-system/models/block.models';
import { HeaderBlockComponent } from '../../../design-system/components/header-block/header-block.component';
import { TextBlockComponent } from '../../../design-system/components/text-block/text-block.component';
import { ImageBlockComponent } from '../../../design-system/components/image-block/image-block.component';
import { ButtonBlockComponent } from '../../../design-system/components/button-block/button-block.component';

@Component({
  selector: 'app-template-builder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderBlockComponent,
    TextBlockComponent,
    ImageBlockComponent,
    ButtonBlockComponent
  ],
  templateUrl: './template-builder.component.html',
  styleUrl: './template-builder.component.scss'
})
export class TemplateBuilderComponent {
  private templateService = inject(TemplateService);
  
  readonly blocks = this.templateService.blocks;
  readonly selectedBlock = this.templateService.selectedBlock;
  readonly selectedBlockId = this.templateService.selectedBlockId;


  addBlock(type: BlockType): void {
    this.templateService.addBlock(type);
  }

  removeBlock(id: string, event: Event): void {
    event.stopPropagation();
    this.templateService.removeBlock(id);
  }

  selectBlock(id: string): void {
    this.templateService.selectBlock(id);
  }

  updateProp(key: string, value: any): void {
    const block = this.selectedBlock();
    if (block) {
      this.templateService.updateBlockProps(block.id, { [key]: value });
    }
  }

  getProp(key: string, defaultValue: any = ''): any {
    return this.selectedBlock()?.props?.[key] ?? defaultValue;
  }

  getBlockProp(block: TemplateBlock, key: string, defaultValue: any = ''): any {
    return block.props?.[key] ?? defaultValue;
  }

  isSelected(blockId: string): boolean {
    return this.selectedBlockId() === blockId;
  }
}