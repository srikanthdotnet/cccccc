import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpservService {
  constructor(private http: Http) { }

  get(path): Observable<any> {
    return this.http.get(path)
      .map((response: Response) => {
        return <any>response.json();
      })
  }

  post(path,Request): Observable<any>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: header });

    return this.http.post(path,JSON.stringify(Request),options)
      .map((response: Response) => {
        return <any>response.json();
      });
  }

  delete(path,Request):Observable<any>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: header,body:Request });

    return this.http.delete(path,JSON.stringify(Request))
    .map((response: Response) => {
      return <any>response.json();
    });
  }
}
