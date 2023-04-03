import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { CardService } from '../../card.service';

export interface StringWrapper {
  value: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  //#ViewChild
  @ViewChild('input') inputRef: ElementRef<MatInput>;

  //#Two way data binding
  inputValue = '';
  valueWithCdCheck: StringWrapper = { value: 'initial' };
  dateString: string

  //#Property binding
  image: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

  constructor(cardService: CardService) {
    this.dateString = new Date().toDateString();
    cardService.doSomething();
  }


  //#Event binding
  onClick(_event: any) {
    console.log(_event);
    this.inputRef.nativeElement.focus();
    this.valueWithCdCheck.value = this.inputValue;
  }
}
