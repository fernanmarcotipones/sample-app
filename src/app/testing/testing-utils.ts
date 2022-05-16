import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement, Type } from '@angular/core';

export class TestingUtils {
  public static queryByCss<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
  }

  public static queryAllByCss<T>(fixture: ComponentFixture<T>, selector: string): DebugElement[] {
    return fixture.debugElement.queryAll(By.css(selector));
  }

  public static queryByDirective<T, Y>(fixture: ComponentFixture<T>, selector: Type<Y>): DebugElement {
    return fixture.debugElement.query(By.directive(selector));
  }

  public static queryAllByDirective<T, Y>(fixture: ComponentFixture<T>, selector: Type<Y>): DebugElement[] {
    return fixture.debugElement.queryAll(By.directive(selector));
  }

}
