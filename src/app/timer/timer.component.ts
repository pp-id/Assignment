import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  mess: any;
  t: any;
  startTime: any;
  pausedTime: any;
  ClickS: number = 0;
  ClickP: number = 0;
  FlagStart: boolean = false;
  prevTime: any;

  constructor() {}

  ngOnInit(): void {}

  Start(msg: any) {
    if (this.prevTime) {
      msg = this.prevTime;
    }
    if (this.t) clearInterval(this.t);
    this.FlagStart = !this.FlagStart;
    if (!this.FlagStart && this.prevTime) {
      msg = this.prevTime;
    }
    console.log('flag value', this.FlagStart);

    if (!msg) {
      alert('enter input');
    } else {
      let tickCount = msg;
      if (this.FlagStart) {
        this.ClickS = this.ClickS + 1;
        console.log(this.ClickS, 'Start count');

        this.startTime = new Date().toString();

        console.log('parent ', msg);

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
  }

  Reset() {
    // clearInterval(this.t)
    this.mess = 0;
    clearInterval(this.t);
  }

  ngOnDestroy(): void {
    if (this.t) clearInterval(this.t);
  }
}
