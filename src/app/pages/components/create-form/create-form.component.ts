import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: UntypedFormBuilder) {
    super();
  }

  definirMensajesError(): void {}
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  nextStep(){

  }
}
