import { Component, ViewContainerRef, ComponentRef } from '@angular/core';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'app-show-alert',
  templateUrl: './show-alert.component.html',
  styleUrls: ['./show-alert.component.scss']
})
export class ShowAlertComponent {


  constructor(

    public toastService: ToastService

  ) { }


  setError() {


    this.toastService.setMessage({ type: "error", body: "sdfsdf" })

  }


}
