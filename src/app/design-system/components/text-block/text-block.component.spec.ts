import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextBlockComponent } from './text-block.component';

describe('TextBlockComponent', () => {
  let component: TextBlockComponent;
  let fixture: ComponentFixture<TextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextBlockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display content when input is set', () => {
    component.content = 'Test content paragraph';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('p');
    
    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent?.trim()).toBe('Test content paragraph');
  });

  it('should apply left alignment by default', () => {
    component.content = 'Default align';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const textDiv = compiled.querySelector('.ds-text') as HTMLElement;
    
    expect(textDiv?.classList).toContain('text-left');
  });

  it('should apply center alignment when set', () => {
    component.alignment = 'center';
    component.content = 'Centered';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const textDiv = compiled.querySelector('.ds-text') as HTMLElement;
    
    expect(textDiv?.classList).toContain('text-center');
  });

  it('should apply right alignment when set', () => {
    component.alignment = 'right';
    component.content = 'Right aligned';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const textDiv = compiled.querySelector('.ds-text') as HTMLElement;
    
    expect(textDiv?.classList).toContain('text-right');
  });
});