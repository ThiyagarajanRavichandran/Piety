import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { PatronListService } from './patron-list.service';
import { QueryResult } from 'src/app/QueryResult';
import { IPatron } from 'src/app/patron';
import {ApiProvider} from '../../api.service';

@Component({
  selector: 'app-patron-list',
  templateUrl: './patron-list.component.html',
  styleUrls: ['./patron-list.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class PatronListComponent implements OnInit {

  public patrons:IPatron[];

  constructor(private _patronListService : PatronListService,private _apiService:ApiProvider) {
     

     }


  ngOnInit() {
    // this._patronListService.getPatrons().subscribe(data => {
      //console.log("PatronListService.getPatrons() -> " + data); this.queryResult = data; });
 

  }




}