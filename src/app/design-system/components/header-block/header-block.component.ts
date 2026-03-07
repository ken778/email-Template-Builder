import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-block.component.html',
  styleUrl: './header-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBlockComponent {
  @Input() title: string = '';
  @Input() logoUrl?: string;
  @Input() bgColor?: string;
}