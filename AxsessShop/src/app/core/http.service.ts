import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { 
  }


  public get(domain: string, endpoint: string): Observable<any> {
    return this.http.get(domain + endpoint);
  }

  public post(domain: string, endpoint: string, payload: any): Observable<any> {
    return this.http.post(domain + endpoint, payload);
  }

}
