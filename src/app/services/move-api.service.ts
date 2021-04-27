import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {SearchCriteria} from '../model/search-criteria';
import {Observable, of} from 'rxjs';
import {SearchResult} from '../model/search-result';
import {catchError, tap} from 'rxjs/operators';
import {apiKey, omdbApi} from '../api-config';

@Injectable({
  providedIn: 'root'
})
export class MoveApiService {

  constructor(private httpClient: HttpClient) {
  }

  findMovies(searchCriteria: SearchCriteria): Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(this.buildUrl(searchCriteria))
      .pipe(
        catchError(this.handleHttpError)
      );
  }

  private handleHttpError(error): Observable<SearchResult> {
    console.log('Http failure: ', error);
    return of({Response: 'False', Error: 'Sorry, something happened. Please try again later.'} as SearchResult);
  }

  private buildUrl(searchCriteria: SearchCriteria): string {
    return `${omdbApi}?s=${searchCriteria.title}&y=${searchCriteria.releaseYear || ''}&apiKey=${apiKey}`;
  }
}
