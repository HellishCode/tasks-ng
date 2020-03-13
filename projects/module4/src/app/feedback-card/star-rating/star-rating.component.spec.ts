import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingComponent } from './star-rating.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

describe('[ Модуль 4] Рейтинг продукта', () => {
  let fixture: ComponentFixture<StarRatingComponent>;
  let component: StarRatingComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [StarRatingComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
  }));
  it('проверка на занчение null', () => {
    component.rate = null;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars.length).toEqual(5);
    expect(stars[0].classes['gold-star']).toBeFalsy();
    expect(stars[1].classes['gold-star']).toBeFalsy();
    expect(stars[2].classes['gold-star']).toBeFalsy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('проверка на занчение 0 - 0.25', () => {
    component.rate = 1.12412;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeFalsy();
    expect(stars[2].classes['gold-star']).toBeFalsy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('проверка на занчение 0.25 < 0.75', () => {
    component.rate = 2.423235;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeTruthy();
    expect(stars[2].classes['gold-star']).toBeTruthy();
    expect(stars[3].classes['gold-star']).toBeFalsy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
  it('проверка на занчение > 0.75', () => {
    component.rate = 3.76453;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(stars[0].classes['gold-star']).toBeTruthy();
    expect(stars[1].classes['gold-star']).toBeTruthy();
    expect(stars[2].classes['gold-star']).toBeTruthy();
    expect(stars[3].classes['gold-star']).toBeTruthy();
    expect(stars[4].classes['gold-star']).toBeFalsy();
  });
});
