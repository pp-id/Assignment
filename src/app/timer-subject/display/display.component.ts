import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  count: any;
  FlagStart: boolean = false;
  ClickS: any;
  startTime: any;
  t: any;
  mess: any;

  constructor(private connect: ConnectionService) { }

  ngOnInit(): void {
    this.connect.timercount.subscribe(val => {
      console.log(val);
      this.count = val;


      this.FlagStart = !this.FlagStart;
      console.log("flag value", this.FlagStart)

      if (this.count < 0) {
        alert("enter input")
      }
      else {
        if (this.count>0) {
          // this.ClickS = this.ClickS + 1;
          // this.startTime = new Date().toString()
          console.log("parent ", val)
          this.t = setInterval(() => {
            this.count = this.count - 1
            this.mess = this.count
            console.log(this.count)
            if (this.count == 0) {
              clearInterval(this.t)
              this.count=0
            }
          }, 1000)
        }
        else {
          clearInterval(this.t)
        }
      }
      })


  }

}
