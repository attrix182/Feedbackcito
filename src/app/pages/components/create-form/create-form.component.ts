import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/app/services/storage/storage.service';
import { FormValidator } from 'src/app/shared/primeng/form.validator';

@Component({
  selector: 'fc-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent extends FormValidator implements OnInit {
  override formGroup: UntypedFormGroup;
  loading: boolean = false;
  @Output('back') back: any = new EventEmitter<void>();
  constructor(private fb: UntypedFormBuilder, private messageService: MessageService, private storageSvc:StorageService) {
    super();
  }

  definirMensajesError(): void {}
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.fb.group({
      team: ['', [Validators.required]],
      eventTitle: ['', [Validators.required]],
      eventDate: ['', [Validators.required]],
    });
  }

  nextStep(){
    this.loading = true;
    console.log(this.formGroup.value);
    this.storageSvc.Insert('events', this.formGroup.value).then((res)=>{
      this.loading = false;

    this.messageService.add({severity:'success', summary: '¡Creada!', detail: 'Sesión creada con éxito'});
    }).catch((err)=>{
      this.loading = false;
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Error al crear la sesión'});
    }
    );

  }
}
