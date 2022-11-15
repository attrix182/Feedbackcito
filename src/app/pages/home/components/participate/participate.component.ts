import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'fc-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.scss']
})
export class ParticipateComponent implements OnInit {
  sesionId: string = '';

  constructor(private storageSvc:StorageService, private router:Router) { }

  ngOnInit(): void {
  }

  goToSesion(){
    if(this.sesionId.length > 5){
    this.router.navigate(['/sesion/',this.sesionId]);
    }
  }

}
