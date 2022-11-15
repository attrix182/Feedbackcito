import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'exitAnimationY', [
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 1}))
        ]),
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 0}))
        ])
      ],

    ),
    trigger(
      'enterAnimationY', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('700ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ],

    )
  ],
})
export class HomeComponent implements OnInit {
  showCreate:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowCreate(){
    this.showCreate = !this.showCreate;
  }

}
