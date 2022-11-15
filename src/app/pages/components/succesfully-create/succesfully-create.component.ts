import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'fc-succesfully-create',
  templateUrl: './succesfully-create.component.html',
  styleUrls: ['./succesfully-create.component.scss']
})
export class SuccesfullyCreateComponent  {
  @Input() event:any;
  copied: boolean = false;

  constructor(private messageSvc:MessageService, private router:Router) { }

  copyLink(){
    let url = 'https://feedbackcito.netlify.app/'+this.event.id;
    navigator.clipboard.writeText(url);
    this.copied = true;
    this.messageSvc.add({severity:'success', summary:'Link Copiado', detail:'El link ha sido copiado al portapapeles'});
  }

  goToPanel(){
    window.open('https://feedbackcito.netlify.app/'+this.event.id);
  }

}
