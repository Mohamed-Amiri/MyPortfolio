import { ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { HomeTsComponent } from './app.component.ts';

describe('HomeTsComponent', () => {
  let component: HomeTsComponent;
  let fixture: ComponentFixture<HomeTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
