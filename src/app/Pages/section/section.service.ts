import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  urlApi: string = environment.url;

  constructor(private http: HttpClient) { }

  companys(): any {
    return this.http.get(this.urlApi + 'listCompanys')
      .pipe(
        map(result => {
          return result;
        }),
        catchError(err => {
          console.error(err);
          return throwError(err);
        })
      )
  }

}
