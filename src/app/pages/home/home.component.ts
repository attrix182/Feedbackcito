import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showCreate:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowCreate(){
    this.showCreate = !this.showCreate;
  }

}
