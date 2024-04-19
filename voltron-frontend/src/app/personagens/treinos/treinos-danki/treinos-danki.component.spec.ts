/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreinosDankiComponent } from './treinos-danki.component';

describe('TreinosDankiComponent', () => {
  let component: TreinosDankiComponent;
  let fixture: ComponentFixture<TreinosDankiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinosDankiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinosDankiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
