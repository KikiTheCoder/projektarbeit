import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBerufskarteComponent } from './page-berufskarte.component';

describe('PageBerufskarteComponent', () => {
  let component: PageBerufskarteComponent;
  let fixture: ComponentFixture<PageBerufskarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBerufskarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBerufskarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
