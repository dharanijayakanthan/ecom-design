import { Injectable } from '@angular/core';
import {throwError as observableThrowError, Observable} from "rxjs";
import {map, catchError} from "rxjs/operators";
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from "@angular/common/http";


@Injectable({ providedIn: 'root'})

export class ServerBaseService {

  commonHeader = new HttpHeaders();
  private baseApiUrl;


  private getCommonHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return httpOptions;
  }

  constructor( private http: HttpClient) {
     this.baseApiUrl =  'https://anatta-demo-app.herokuapp.com/api/'
  }


  getData(endpoint): Observable<any> {
    return this.http.get(this.baseApiUrl + endpoint, this.getCommonHeaders()).pipe(map((response : Response) => {
      return response;
    }), catchError(e => {
      return observableThrowError(e);
    }));
  }

  sendData(endPoint, data): Observable<any> {
    return this.http.post(this.baseApiUrl + endPoint, data, this.getCommonHeaders()).pipe(map((response : Response) => {
      return response;
    }), catchError(e => {
      return observableThrowError(e);
    }))
  }
}
