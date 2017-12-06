import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-erpl',
  templateUrl: './erpl.component.html',
  styleUrls: ['./erpl.component.scss'],
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
export class ErplComponent implements OnInit {
  state:string='small'
  animate(){
    this.state=this.state=='large' ? 'small' : 'large';
  }


  constructor() { }

  ngOnInit() {
  }

}
