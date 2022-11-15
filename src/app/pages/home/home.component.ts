import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

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
  showParticipate: boolean = false;
  idHandled: string;
  event: any;
  loading: boolean = false;
  actualSection = this.router.url.split('/')[1];

  constructor(private storageSvc: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.checkUrl();
  }

  toggleShowCreate() {
    this.showCreate = !this.showCreate;
  }

  toggleShowParticipate() {
    this.showParticipate = !this.showParticipate;
  }

  checkUrl() {
    if (this.actualSection === 'participate') {
      this.showParticipate = true;
    }
    if (this.actualSection.length > 1) {
      this.storageSvc.GetByParameter('events', 'id', this.actualSection).subscribe((res: any) => {
        console.log(res);
        this.loading = false;
        this.event = res[0];
      });
    }
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
