import { Injectable } from '@angular/core';

//#Service - injectable service
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  doSomething(){
    console.log('Something')
  }
}
