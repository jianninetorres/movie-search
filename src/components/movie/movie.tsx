export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface Movies {
  movies: MovieProps[];
}

export const ListMovies = ({ movies }: Movies): JSX.Element => {
  const list = movies.map((movie) => {
    return <li key={movie.id}>{movie.title}</li>;
  });

  return <ul>{list}</ul>;
};
