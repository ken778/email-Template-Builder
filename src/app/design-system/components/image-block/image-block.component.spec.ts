import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageBlockComponent } from './image-block.component';

describe('ImageBlockComponent', () => {
  let component: ImageBlockComponent;
  let fixture: ComponentFixture<ImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBlockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display image with correct src when input is set', () => {
    component.src = 'https://via.placeholder.com/600x200';
    component.alt = 'Test Image';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    
    expect(img).toBeTruthy();
    expect(img?.src).toContain('via.placeholder.com/600x200');
    expect(img?.alt).toBe('Test Image');
  });

  it('should default to 100% width when not specified', () => {
    component.src = 'https://via.placeholder.com/300';
    component.alt = 'Default Width';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    
    expect(img?.style.width).toBe('100%');
  });

  it('should apply custom width when specified', () => {
    component.src = 'https://via.placeholder.com/300';
    component.alt = 'Custom Width';
    component.width = '50%';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    
    expect(img?.style.width).toBe('50%');
  });

  it('should render with alt text for accessibility', () => {
    component.src = 'https://via.placeholder.com/400x300';
    component.alt = 'Accessible description';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    
    expect(img?.alt).toBe('Accessible description');
  });
});