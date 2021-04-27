import {MovieDetails} from './movie-details';

export interface SearchResult {
  Search: MovieDetails[];
  totalResults: string;
  Response: string;
  Error: string;
}
