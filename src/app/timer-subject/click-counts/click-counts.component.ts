import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css'],
})
export class ClickCountsComponent implements OnInit, OnDestroy {
  timerValueSubs!: Subscription;
  startCount = 0;
  pausedCount = 0;

  constructor(private connect: ConnectionService) {}

  ngOnInit(): void {
    this.timerValueSubs = this.connect.clickValue.subscribe((val) => {
      console.log(val);
      if(val==="start") this.startCount=this.startCount+1;
      if(val==="pause") this.pausedCount=this.pausedCount+1;
    });
  }

  ngOnDestroy(): void {
    if (this.timerValueSubs) {
      this.timerValueSubs.unsubscribe();
    }
  }
}
