import { Component, Input, OnInit } from '@angular/core';

export interface CardEntity {
  name: string;
  text: string;
  iconName: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  innerChild: CardEntity;
  @Input() set card(e: CardEntity) {
    console.log(e);
    this.innerChild = e;
  }

  constructor() {
  }

  ngOnInit(): void {}
}
