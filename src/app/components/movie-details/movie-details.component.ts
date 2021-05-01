import {Component, Input, OnInit} from '@angular/core';
import {MovieDetails} from '../../model/movie-details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent  {
  @Input() movieDetails: MovieDetails;
}
