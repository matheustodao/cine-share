type SortByMedia = 'popularity.asc' | 'popularity.desc';

export type CommonQueryParams = Partial<{
  page: number,
  language: string,
  sort_by: SortByMedia,
  with_genres: number,
  with_origin_country: string,
  with_original_language: string
}>;

export interface DiscoverMovieQueryParams extends CommonQueryParams {}
export interface DiscoverTVQueryParams extends CommonQueryParams {}

export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type ResponseTMDBArray<T = any[]> = {
  results: T,
  page: number,
  total_pages: number,
  total_results: number
};

export interface ResponseTMDBMovie extends ResponseTMDBMovie<TMDBMovie[]> { }
