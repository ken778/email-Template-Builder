import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemplateBuilderComponent } from './template-builder/components/template-builder/template-builder.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TemplateBuilderComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render TemplateBuilderComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const templateBuilder = compiled.querySelector('app-template-builder');
    
    expect(templateBuilder).toBeTruthy();
  });

  it('should have correct title property', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app.title).toBe('everlytic-email-builder');
  });
});