import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaFormComponent } from './categoriaform.component';

describe('CategoriaformComponent', () => {
  let component: CategoriaFormComponent;
  let fixture: ComponentFixture<CategoriaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
