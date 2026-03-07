import { Component } from '@angular/core';
import { TemplateBuilderComponent } from './template-builder/components/template-builder/template-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateBuilderComponent],
  template: `<app-template-builder></app-template-builder>`,
  styles: []
})
export class AppComponent {
  title = 'everlytic-email-builder';
}