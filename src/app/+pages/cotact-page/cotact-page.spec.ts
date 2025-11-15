import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactPage } from './cotact-page';

describe('CotactPage', () => {
  let component: CotactPage;
  let fixture: ComponentFixture<CotactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotactPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
