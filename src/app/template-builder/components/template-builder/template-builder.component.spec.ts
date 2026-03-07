import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateBuilderComponent } from './template-builder.component';
import { TemplateService } from '../../services/template.service';
import { of } from 'rxjs';

describe('TemplateBuilderComponent', () => {
  let component: TemplateBuilderComponent;
  let fixture: ComponentFixture<TemplateBuilderComponent>;
  let templateService: TemplateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBuilderComponent],
      providers: [TemplateService]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateBuilderComponent);
    component = fixture.componentInstance;
    templateService = TestBed.inject(TemplateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with empty blocks', () => {
    expect(component.blocks().length).toBe(0);
  });

  it('should add a block when addBlock is called', () => {
    component.addBlock('text');
    fixture.detectChanges();
    
    expect(component.blocks().length).toBe(1);
    expect(component.blocks()[0].type).toBe('text');
  });

  it('should select a block when clicked', () => {
    component.addBlock('header');
    const blockId = component.blocks()[0].id;
    
    component.selectBlock(blockId);
    fixture.detectChanges();
    
    expect(component.selectedBlockId()).toBe(blockId);
  });

  it('should update block props when form input changes', () => {
    component.addBlock('button');
    const blockId = component.blocks()[0].id;
    component.selectBlock(blockId);
    fixture.detectChanges();
    
    // Simulate form input update
    component.updateProp('label', 'New Button Text');
    fixture.detectChanges();
    
    const updatedBlock = component.blocks().find(b => b.id === blockId);
    expect(updatedBlock?.props['label']).toBe('New Button Text');
  });

  it('should remove a block when removeBlock is called', () => {
    component.addBlock('image');
    const blockId = component.blocks()[0].id;
    
    // Create a mock event
    const mockEvent = new Event('click');
    spyOn(mockEvent, 'stopPropagation');
    
    component.removeBlock(blockId, mockEvent);
    fixture.detectChanges();
    
    expect(component.blocks().length).toBe(0);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
});