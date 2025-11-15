import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPage } from './interested-page';

describe('InterestedPage', () => {
  let component: InterestedPage;
  let fixture: ComponentFixture<InterestedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestedPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
