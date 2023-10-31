import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardEntity } from '../child/child.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {
  @ViewChild('input') cmp: ElementRef<HTMLInputElement>;

  cardEntites: CardEntity[] = [
    {
      name: 'Example1',
      text: 'This is the first example',
      iconName: 'home',
    },
    {
      name: 'Example2',
      text: 'This is the second example',
      iconName: 'event',
    },
  ];

  iso = new Date();
  date: string|number|Date;

  constructor() {}

  ngOnInit(): void {}

  getName(name: string){
    alert(name);
  }
}
