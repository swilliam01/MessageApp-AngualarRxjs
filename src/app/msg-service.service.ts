import { Injectable } from '@angular/core';
import { personObj } from './personObj';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  private msgurl = 'http://localhost:3000/messageApp';  // URL to web api

  constructor(private http: HttpClient) {
   }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

 public getJSON(): Observable<personObj[]> {
    return this.http.get<personObj[]>(this.msgurl);
  }

  /** POST: add a new hero to the server */
addPost (postMsg: personObj): Observable<personObj> {
  return this.http.post<personObj>(this.msgurl, postMsg);
  // .pipe(
  //   // tap((newMsg: personObj) => this.log(`added hero w/ id=${newHero.id}`)),
  //   catchError(this.handleError<H  ero>('addHero'))
  // );
}
// genId(msgs: personObj[]): number {
//   return msgs.length > 0 ? Math.max(...msgs.map(m => m.id)) + 1 : 1;
// }

}
