import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-block.component.html',
  styleUrl: './image-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageBlockComponent {
  @Input() src: string = '';
  @Input() alt: string = 'Image';
  @Input() width: string = '100%';
}