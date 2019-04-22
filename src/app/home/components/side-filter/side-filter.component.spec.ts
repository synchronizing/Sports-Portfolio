import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFilterComponent } from './side-filter.component';

describe('HeaderComponent', () => {
  let component: SideFilterComponent;
  let fixture: ComponentFixture<SideFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
