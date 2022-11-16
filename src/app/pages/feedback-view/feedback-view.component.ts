import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'fc-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.scss']
})
export class FeedbackViewComponent implements OnInit {
  feedback:any;
  loading: boolean = true;
  event:any;
  getId = this.router.url.split('/')[2].trim();


  constructor(private router:Router, private storageSvc:StorageService) { }

  ngOnInit(): void {
    this.getFeedback();
  }

  getFeedback(){
    this.loading = true;
    this.storageSvc.GetByParameter('feedbacks', 'id', this.getId).subscribe((res:any)=>{
      this.feedback = res;
      console.log(this.feedback);

    })

    this.storageSvc.GetByParameter('events', 'id', this.getId).subscribe((res:any)=>{
      this.event = res[0];
      this.loading = false;
    });
  }

}
