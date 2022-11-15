import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/app/services/storage.service';
import { FormValidator } from 'src/app/shared/primeng/form.validator';

@Component({
  selector: 'fc-participant-view',
  templateUrl: './participant-view.component.html',
  styleUrls: ['./participant-view.component.scss']
})
export class ParticipantViewComponent extends FormValidator implements OnInit {
  loading: boolean = true;
  getId = this.router.url.split('/')[2].trim();
  event: any;
  override formGroup: any;

  constructor(
    private storageSvc: StorageService,
    private router: Router,
    private fb: UntypedFormBuilder,
    private messageSvc: MessageService
  ) {
    super();
    this.loading = true;
  }

  ngOnInit(): void {
    this.getSesion();
    this.initForm();
  }

  definirMensajesError(): void {}

  initForm() {
    this.formGroup = this.fb.group({
      name: [''],
      feedback: ['', Validators.required]
    });
  }

  sendFeedback() {
    this.formGroup.id = this.getId;
    this.storageSvc.InsertCustomID('feedbacks', this.getId, this.event).then((res: any) => {
      console.log(res);
      this.messageSvc.add({ severity: 'success', summary: 'Exito', detail: 'Gracias por tu feedback' });
    });
  }

  getSesion() {
    this.loading = true;

    let aux = this.getId.trim();

    this.storageSvc.GetByParameter('events', 'id', aux).subscribe((res: any) => {
      console.log(res[0]);
      this.event = res[0];
      this.loading = false;
   this.validate()

    });
  }

  validate(){
    console.log(this.event)
    if(!this.event ){
      this.router.navigateByUrl('')
    }
  }
}
