import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from '../../model/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() searchResultData: SearchResult;

  constructor() { }

  ngOnInit(): void {
  }

}
