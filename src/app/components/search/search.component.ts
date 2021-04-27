import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MoveApiService} from '../../services/move-api.service';
import {SearchCriteria} from '../../model/search-criteria';
import {SearchResult} from '../../model/search-result';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchResult = new EventEmitter<SearchResult>();
  @ViewChild(NgForm) form: NgForm;
  searchCriteria: SearchCriteria = {} as SearchCriteria;

  constructor(private movieApi: MoveApiService) {
  }

  search(): void {
    if (this.form.valid) {
      this.movieApi.findMovies(this.searchCriteria)
        .subscribe(data => this.searchResult.emit(data));
    }
  }
}
