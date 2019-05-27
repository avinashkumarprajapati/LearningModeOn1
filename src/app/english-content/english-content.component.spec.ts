import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishContentComponent } from './english-content.component';

describe('EnglishContentComponent', () => {
  let component: EnglishContentComponent;
  let fixture: ComponentFixture<EnglishContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
