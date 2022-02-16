import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Rotate(){
    // document.querySelector('#banner').style.transform
    //                    = 'rotate(90deg)';
  }
}
