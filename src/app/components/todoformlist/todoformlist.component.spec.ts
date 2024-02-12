import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoformlistComponent } from './todoformlist.component';

describe('TodoformlistComponent', () => {
  let component: TodoformlistComponent;
  let fixture: ComponentFixture<TodoformlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoformlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
