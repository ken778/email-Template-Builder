import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TextAlignment = 'left' | 'center' | 'right';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBlockComponent {
  @Input() content: string = '';
  @Input() alignment: TextAlignment = 'left';
}