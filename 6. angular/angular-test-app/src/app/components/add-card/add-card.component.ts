import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardEntity } from '../card/card.component';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['add-card.component.scss'],
})
export class AddCardComponent {
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  //#Output event binding
  @Output() name: EventEmitter<string> = new EventEmitter<string>()

  addCardEntity(card: CardEntity) {}

  onClick(name: string) {
    this.name.emit(name)

    if (!this.formGroup.valid) {
      return;
    }
    const card: CardEntity = {
      name: this.formGroup.controls.name.value,
      text: this.formGroup.controls.text.value,
      iconName: this.formGroup.controls.icon.value,
    };

    this.addCardEntity(card);
  }
}
