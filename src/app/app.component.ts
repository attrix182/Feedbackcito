import { AfterViewInit, Component, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Analytics } from '@angular/fire/analytics';
import { logEvent } from 'firebase/analytics';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  private analytics: Analytics = inject(Analytics);

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngAfterViewInit() {
    logEvent(this.analytics, 'page_view_home');
  }

}
