import {Component, ViewChild} from '@angular/core';
import {SearchComponent} from './components/search/search.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {SearchResult} from './model/search-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(SearchComponent) search: SearchComponent;
  @ViewChild(SearchResultComponent) searchResult: SearchResultComponent;

  title = 'movie-search';

  displayResult(data: SearchResult): void {
    this.searchResult.searchResultData = data;
  }
}
