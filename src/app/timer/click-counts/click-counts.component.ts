import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css']
})
export class ClickCountsComponent implements OnInit {
  @Input() clic=0;
  @Input() clicP=0;

  constructor() { }

  ngOnInit(): void {
  }

}
