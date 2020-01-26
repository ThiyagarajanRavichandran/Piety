import { Component, OnInit } from '@angular/core';
import { data, orderDetails } from './data';
import { QueryResult } from 'src/app/QueryResult';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit {

  public initialSort: Object;
  public queryResult : QueryResult;
  constructor() { }
  //public data: Object[];
  public initialPage: Object;

  public data: Object[];
  public editSettings: Object;
  public toolbar: string[];
  public eventidrules: Object;
  public guestidrules: Object;
  public freightrules: Object;
  public pageSettings: Object;
  public editparams: Object;


  ngOnInit() {
    this.data = orderDetails;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Edit', 'Delete']; // 'Add', 
    this.eventidrules = { required: true, number: true };
    this.guestidrules = { required: true };
    this.freightrules =  { required: true };
    this.editparams = { params: { popupHeight: '300px' }};
    this.pageSettings = { pageCount: 5};
    
  }
}
