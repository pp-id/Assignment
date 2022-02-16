import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit, OnDestroy {
  count: any;
  FlagStart: boolean = false;
  ClickS: any;
  startTime: any;
  t: any;
  mess: any;
  prevTime: any;
  ClickP: any;
  pausedTime!: string;
  clickVal!: string;
  clickSubscrip!: Subscription;
  timeCountSubs!: Subscription;
  timeArr:any[]=[]

  constructor(private connect: ConnectionService) {}

  ngOnInit(): void {



    this.clickSubscrip = this.connect.clickValue.subscribe((c) => {
      this.clickVal = c;
      if (this.clickVal === 'reset') {
        this.mess = 0;
        // this.count=0;
        if (this.t) clearInterval(this.t);
      }
      
    });

    this.timeCountSubs = this.connect.timercount.subscribe((val) => {
      if (!val) return;
      console.log(val);
      // this.count = val;

      if (this.prevTime) {
        val = this.prevTime;
      }
      if (this.t) clearInterval(this.t);
      this.FlagStart = !this.FlagStart;
      if (!this.FlagStart && this.prevTime) {
        val = this.prevTime;
      }
      console.log('flag value', this.FlagStart);

      if (!val) {
        alert('enter input');
      } else {
        let tickCount = val;
        if (this.FlagStart) {
          this.ClickS = this.ClickS + 1;
          console.log(this.ClickS, 'Start count');

          this.startTime = new Date().toString();
          this.t = setInterval(() => {
            tickCount = tickCount - 1;
            this.mess = tickCount;
            // console.log(msg)
            if (tickCount == 0) {
              this.prevTime = 0;
              clearInterval(this.t);
            }
          }, 1000);
        } else {
          this.ClickP = this.ClickP + 1;
          this.pausedTime = new Date().toString();
          console.log(this.ClickP, 'Paused count');
          this.prevTime = this.mess;
          clearInterval(this.t);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.clickSubscrip) this.clickSubscrip.unsubscribe();

    if (this.timeCountSubs) this.timeCountSubs.unsubscribe();
  }
}
