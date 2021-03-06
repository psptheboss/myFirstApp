import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('scaleMyParagraph',[
      state('small',style({
        transform:'scale(1)'
      })),
      state('large',style({
        transform:'scale(3)'
      })),
      transition('small <=> large',animate('300ms ease-in'))
    ])
  ]
})

export class AppComponent {
  
  state:string='small'
  animate(){
    this.state=this.state=='large' ? 'small' : 'large';
  }


constructor(private dataService:DataService){

}
}

