import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExampleService {
  constructor(private _http: HttpClient) {


  }



  getData(url: string): Observable<any> {

    return this._http.get(url,)
      .pipe(map(response => response));
  }
}
