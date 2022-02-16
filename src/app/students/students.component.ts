import { Component, OnInit , ViewChild} from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort,MatSortable } from '@angular/material/sort'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @ViewChild(MatSort) sort! : MatSort;

  dataSource: any;
  displayedColumns=['name','username','email']

  constructor(private connect:ConnectionService) { }

  ngOnInit(): void {
    this.connect.getUser().subscribe((data)=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.sort=this.sort
    })
  }

}
