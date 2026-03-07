import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderBlockComponent } from '../header-block/header-block.component';


describe('HeaderBlockComponent', () => {
  let component: HeaderBlockComponent;
  let fixture: ComponentFixture<HeaderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBlockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display title when input is set', () => {
    component.title = 'Test Header';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h1.ds-title');
    
    expect(titleElement).toBeTruthy();
    expect(titleElement?.textContent?.trim()).toBe('Test Header');
  });

  it('should display logo when logoUrl is provided', () => {
    component.logoUrl = 'https://via.placeholder.com/40';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img.ds-logo') as HTMLImageElement;
    
    expect(imgElement).toBeTruthy();
    expect(imgElement?.src).toContain('via.placeholder.com/40');
  });

  it('should NOT display logo when logoUrl is not provided', () => {
    component.logoUrl = undefined;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img.ds-logo');
    
    expect(imgElement).toBeFalsy();
  });

  it('should apply default background color when bgColor is not set', () => {
    component.title = 'Default BG';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
  
    const headerElement = compiled.querySelector('.ds-header') as HTMLElement;
    
    expect(headerElement?.style.backgroundColor).toBeTruthy();
  });
});