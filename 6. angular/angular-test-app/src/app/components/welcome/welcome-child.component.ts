import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface StringWrapper {
  value: string;
}
//#Interpolation
@Component({
  selector: 'app-welcome-child',
  template: '<div>Change detection demo: {{ stringWrapper.value }}</div>',
})
export class WelcomeChildComponent {

  //#Property binding
  @Input() stringWrapper: StringWrapper;

  constructor() {}
}
