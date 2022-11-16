import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'fc-succesfully-create',
  templateUrl: './succesfully-create.component.html',
  styleUrls: ['./succesfully-create.component.scss']
})
export class SuccesfullyCreateComponent {
  @Input() event: any;
  copied: boolean = false;
  url: string = '';

  constructor(private messageSvc: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.url = 'https://feedbackcito.netlify.app/#/sesion/' + this.event.id;

   // this.localStorageManager();
  }

  removeLocalEvent(){
   localStorage.removeItem("events")
  }

  localStorageManager() {
    let events: any[] = [];
    events = JSON.parse(localStorage.getItem('events'));
    if (events == null) {
      localStorage.setItem('events', JSON.stringify(this.event));
    } else {
      localStorage.setItem('events', JSON.stringify(this.event));
    }
  }

  copyLink() {
    navigator.clipboard.writeText(this.url);
    this.copied = true;
    this.messageSvc.add({
      severity: 'success',
      summary: 'Link Copiado',
      detail: 'El link ha sido copiado al portapapeles'
    });
  }

  goToPanel() {
    window.open('https://feedbackcito.netlify.app/#/results/' + this.event.id);
  }
}
