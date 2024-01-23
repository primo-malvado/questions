import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, filter, throttleTime } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {


  public temperatureValue: number = 20; 
  private temperature = new Subject<number>();
  public temperature$ = this.temperature.asObservable();



  ngOnInit(): void {
    
  }

  inc(){

    this.temperatureValue++;    
  }
  dec(){
    this.temperatureValue--;
  }

}
