import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars=['Audi','BMW','Rolls Royce','Jaguar'];

  myCaption(){
    return 'These are High class Cars'
  }
}
