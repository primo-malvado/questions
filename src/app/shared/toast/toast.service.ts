import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


export interface Toast {
  type: string;
  body: string;
}


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  private messagesSubject = new BehaviorSubject<Toast []>([])

  public messages$ = this.messagesSubject.asObservable();
  constructor(

  ) {  }

  setMessage(toast: Toast){

 
    let actual = this.messagesSubject.value.slice(0);
    actual.push(toast);

    this.messagesSubject.next(actual);
  }



}
