import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-take-input',
  templateUrl: './take-input.component.html',
  styleUrls: ['./take-input.component.css']
})
export class TakeInputComponent implements OnInit {

  constructor() { }
  @Output() start= new EventEmitter();
  @Output() reset= new EventEmitter();
  // @Input() pausedAt='';

  ngOnInit(): void {
  }

  Call(msg:any){
    this.start.emit(msg)
    
  }

  Reset(){
    this.reset.emit()
    console.log("reset")
  }
}
