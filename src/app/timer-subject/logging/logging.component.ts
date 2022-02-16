import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit, OnDestroy {
  clickTimeArr: string[] = [];
  clickSubs!: Subscription;
  constructor(private connect: ConnectionService) {}

  ngOnInit(): void {
    this.clickSubs = this.connect.clickValue.subscribe((val) => {
      console.log(val);
      if (val === 'pause') {
        this.clickTimeArr.push(new Date().toLocaleString());
      }
      if (val === 'start') {
        this.clickTimeArr.push(new Date().toLocaleString());
      }
    });
  }
  ngOnDestroy(): void {
    if (this.clickSubs) this.clickSubs.unsubscribe();
  }
}
