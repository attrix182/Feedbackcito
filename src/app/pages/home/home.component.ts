import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/sevices/storage.service';

@Component({
  selector: 'fc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('exitAnimationY', [
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(100%)', opacity: 1 }))
      ]),
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 0 }))
      ])
    ]),
    trigger('enterAnimationY', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('700ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  showCreate: boolean = false;
  succesfullyCreate: boolean = false;
  idHandled: string;
  event: any;
  loading: boolean = false;

  constructor(private storageSvc: StorageService) {}

  ngOnInit(): void {
    this.handleID('ADFXxwjXcoaV3HaoLPbZ');
  }

  toggleShowCreate() {
    this.showCreate = !this.showCreate;
  }

  handleID(id: string) {
    console.log(id);
    this.idHandled = id;
    this.loading = true;
    this.showCreate = false;
    this.storageSvc.GetByParameter('events', 'id', id).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.event = res[0];
      this.succesfullyCreate = true;
    });
  }
}
