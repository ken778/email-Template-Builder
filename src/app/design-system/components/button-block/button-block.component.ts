import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-block.component.html',
  styleUrl: './button-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonBlockComponent {
  @Input() label: string = '';
  @Input() url: string = '#';
  @Input() variant: ButtonVariant = 'primary';
}