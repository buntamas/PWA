import { Component, Input } from '@angular/core';

export interface StringWrapper {
  value: string;
}
//#Data binding - Interpolation
@Component({
  selector: 'app-welcome-child',
  template: '<div>Change detection demo: {{ stringWrapper.value }}</div>',
})
export class WelcomeChildComponent {

  //#Data binding - Property binding
  @Input() stringWrapper: StringWrapper;

  constructor() {}
}
