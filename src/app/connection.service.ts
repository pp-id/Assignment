import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject} from 'rxjs';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

Url="https://fakestoreapi.com";
private serviceUrl="https://jsonplaceholder.typicode.com/users"

public timercount=new BehaviorSubject(0);
public clickValue=new BehaviorSubject('');

  constructor(private http: HttpClient) {}

public getProd(){
  return this.http.get<any[]>(this.Url+"/products")
}

public setCount(no:number){
  this.timercount.next(no)
}

getUser():Observable<User[]>{
  return this.http.get<User[]>(this.serviceUrl)
}

public setClick(c:string){
  if(c==="pause"){
    this.clickValue.next("pause")
  }
  if(c==="start"){
    this.clickValue.next("start")
  }
}

}
