import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-containrer',
  templateUrl: './toast-containrer.component.html',
  styleUrls: ['./toast-containrer.component.scss']
})
export class ToastContainrerComponent implements OnInit{

  constructor(public toastService : ToastService){}

  ngOnInit(){

  }

}
