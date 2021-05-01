import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MoveApiService} from '../../services/move-api.service';
import {SearchCriteria} from '../../model/search-criteria';
import {SearchResult} from '../../model/search-result';
import {NgForm} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchResult = new EventEmitter<SearchResult>();
  @ViewChild(NgForm) form: NgForm;
  searchCriteria: SearchCriteria = {} as SearchCriteria;
  searchResultData: SearchResult;

  constructor(private movieApi: MoveApiService) {
  }

  submit(): void {
    this.findMovies();
  }

  onPageChanged(pageInfo): void {
    this.findMovies(pageInfo.page);
  }

  onSearchChange(): void {
    this.refreshSearchResult(null);
  }

  showPagination(): boolean {
    return parseInt(this.searchResultData?.totalResults) > 10;
  }

  private findMovies(page?): void {
    if (this.form.valid) {
      this.movieApi.findMovies(this.searchCriteria, page)
        .subscribe(data => {
            this.refreshSearchResult(data);
          }
        );
    }
  }

  private refreshSearchResult(data): void {
    this.searchResultData = data as SearchResult;
    this.searchResult.emit(data);
  }
}
