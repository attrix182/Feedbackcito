import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'fc-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.scss']
})
export class ParticipateComponent implements OnInit {
  @Input('id') sesionId: string = '';
  @Output('back') goBack: any = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  goToSesion() {
    if (this.sesionId.length > 5) {
      this.router.navigate(['/sesion/', this.sesionId.trim()]);
    }
  }
}
