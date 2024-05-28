import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EventSesion } from 'src/app/models/event.model';
import { Feedback } from 'src/app/models/feedback.model';
import { AiService } from 'src/app/services/ai.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'fc-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.scss']
})
export class FeedbackViewComponent implements OnInit {
  feedback: Feedback[];
  loading: boolean = true;
  event: EventSesion;
  getId = this.router.url.split('/')[2].trim();
  loadingIA: boolean = false;

  iaResponse: string;
  showIAmodal: boolean = false;

  constructor(private router: Router, private storageSvc: StorageService, private messageService: MessageService, private AIservice: AiService) {}

  ngOnInit(): void {
    this.getFeedback();
  }

  getFeedback() {
    this.loading = true;
    this.storageSvc.getByParameter('feedbacks', 'id', this.getId).subscribe((res: any) => {
      this.feedback = res;
      console.log(this.feedback);
    });

    this.storageSvc.getByParameter('events', 'id', this.getId).subscribe((res: any) => {
      this.event = res[0];
      this.loading = false;
    });
  }

  onConfirm() {
    this.messageService.clear('c');
    console.log(this.getId);
    this.feedback.forEach((element) => {
      this.storageSvc.delete('feedbacks', element.id).then(() => {
        this.messageService.add({severity:'success', summary: 'Respuestas eliminadas', detail: 'Las respuestas han sido eliminadas'});
      })
    })
  }

  onReject() {
    this.messageService.clear('c');
}


  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: '¿Quieres eliminar todas las respuestas?',
    });
  }


  async getIA(){
    this.loadingIA = true;
    if(this.iaResponse){
      this.showIAmodal = true;
      return;
    }
    const prompt = `Genera un resumen conciso para facilitar la comprensión de las respuestas que se muestran a continuacion: ${JSON.stringify(this.feedback)}`
    const result = await this.AIservice.model.generateContent(prompt);
    const response = await result.response;
    this.iaResponse = response.text();
    this.loadingIA = false;
    this.showIAmodal = true;
  }

}
