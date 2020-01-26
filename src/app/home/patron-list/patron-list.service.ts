import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryResult } from 'src/app/QueryResult';

@Injectable({
  providedIn: 'root'
})
export class PatronListService {

  public queryResult : QueryResult;

  constructor(private http: HttpClient) { }

  getPatrons() : Observable<QueryResult> {
    let postContents = { "_keyword_" : "patron", "_secret-key_" : "2bf52be7-9f68-4d52-9523-53f7f267153b" };
    return this.http.post<QueryResult>("http://10.44.8.74:8480/OrionAPIServices/GenericResultBuilderService/buildResults", postContents);
//    console.log('x = ' + this.queryResult);
  }
}