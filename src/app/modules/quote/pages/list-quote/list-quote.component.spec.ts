import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuoteComponent } from './list-quote.component';

describe('ListQuoteComponent', () => {
  let component: ListQuoteComponent;
  let fixture: ComponentFixture<ListQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
