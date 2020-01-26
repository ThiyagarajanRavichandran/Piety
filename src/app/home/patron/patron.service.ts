import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryResult } from 'src/app/QueryResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatronService {

  constructor(private http: HttpClient) { }
}
