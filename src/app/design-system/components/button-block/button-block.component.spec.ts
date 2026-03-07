import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonBlockComponent } from './button-block.component';

describe('ButtonBlockComponent', () => {
  let component: ButtonBlockComponent;
  let fixture: ComponentFixture<ButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonBlockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display button label when input is set', () => {
    component.label = 'Click Here';
    component.url = 'https://example.com';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('a.ds-btn') as HTMLAnchorElement;
    
    expect(anchor).toBeTruthy();
    expect(anchor?.textContent?.trim()).toBe('Click Here');
    expect(anchor?.href).toContain('example.com');
  });

  it('should apply primary variant by default', () => {
    component.label = 'Primary Button';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('a.ds-btn') as HTMLElement;
    
    expect(anchor?.classList).toContain('ds-btn-primary');
    expect(anchor?.classList).not.toContain('ds-btn-secondary');
  });

  it('should apply secondary variant when set', () => {
    component.label = 'Secondary Button';
    component.variant = 'secondary';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('a.ds-btn') as HTMLElement;
    
    expect(anchor?.classList).toContain('ds-btn-secondary');
    expect(anchor?.classList).not.toContain('ds-btn-primary');
  });

  it('should have correct href attribute', () => {
    component.label = 'Link Button';
    component.url = 'https://everlytic.com';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('a.ds-btn') as HTMLAnchorElement;
    
    expect(anchor?.getAttribute('href')).toBe('https://everlytic.com');
  });
});