import { Component, OnInit } from '@angular/core';
import { data, orderDetails } from './data';
import { QueryResult } from 'src/app/QueryResult';
import { CommonUtilService } from 'src/app/common-util-service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public initialSort: Object;
  public isAdmin: boolean;
  public queryResult : QueryResult;

  constructor(private commonUtilService: CommonUtilService) { }
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

  public eventTypeData: { [key: string]: Object }[] = [{ Id: 'GANAPATHI_HOMAM', Event: 'Ganapathi Homam' },
  { Id: 'NAVAGRAHA_HOMAM', Event: 'Navagraha Homam' }, { Id: 'AYUSHYA_HOMAM', Event: 'Ayushya Homam' },
  { Id: 'SUDARSANA_HOMAM', Event: 'Sudarsana Homam' }, { Id: 'UGRA_RADHA_SANTI', Event: 'Ugra Radha Santi' }];
  public eventTypeFields: Object = { text: 'Event', value: 'Id' };
  public eventTypeText: string = "Event Type";

  public priestData: { [key: string]: Object }[] = [{ Id: 'A1', Name: 'V.P. Iyer Samathi' },
  { Id: 'A2', Name: 'Periyazhvar' }, { Id: 'A3', Name: 'Velukkudi Krishnan' }, 
  { Id: 'A4', Name: 'Tirumalai Krishnamacharya' }];
  public priestFields: Object = { text: 'Name', value: 'Id' };
  public priestText: string = "Select a Priest";

  ngOnInit() {
    this.data = orderDetails;
    this.isAdmin = (this.commonUtilService.getloginType() == 'Admin');
    console.log("this.isAdmin = " + this.isAdmin);
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = []; //'Add', 'Edit', 'Delete'];
    this.eventidrules = { required: true, number: true };
    this.guestidrules = { required: true };
    this.freightrules =  { required: true };
    this.editparams = { params: { popupHeight: '300px' }};
    this.pageSettings = { pageCount: 5};
    
  }
  
  
  public startSearch() {
    console.log('search');
  }  

}
