import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

enum ISortType {
  DEFAULT = 'DEFAULT',
  ASC = 'ASC',
  DESC = 'DESC',
}
@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css'],
})
export class EcomComponent implements OnInit {
  Data: any[]=[];
  layout: string = 'grid';
  orgData:any[] =[];
  constructor(private conn: ConnectionService) {}
  ngOnInit(): void {
    this.conn.getProd().subscribe((data:any[]) => {
      console.log('data', data);
      this.Data = data;
      this.orgData = [...data]
      console.log(typeof data);
    });
  }

  //  SortP(){
  //   this.Data;

  //  }

  sortingData(e: any) {
    const type =  e.target.value;
    console.log(type);
    if(type === ISortType.DEFAULT) {
      this.Data = [...this.orgData]
    }

    if ((type === ISortType.ASC)) {
      this.Data.sort((x: any, y: any) => x.price - y.price);
    }

    if ((type === ISortType.DESC)) {
      this.Data.sort((x: any, y: any) => y.price - x.price);
    }
  }
}
