import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogUtility } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sendFeedback() {
    DialogUtility.alert('Thankyou for your feedback. You will soon receive a response from our management.');
  }
}
