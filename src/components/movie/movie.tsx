import { Card, Image, SimpleGrid } from "@mantine/core";
import defaultImage from "../../assets/themoviedb.jpeg";

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
  language: string;
}

export const ListMovies = ({ movies, language }: Movies): JSX.Element => {
  const list = movies.map((movie) => {
    return (
      <Card key={movie.id} shadow="md" p="lg">
        <Card.Section>
          <Image
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`
                : defaultImage
            }
            height={160}
            alt={movie.title}
          />
        </Card.Section>

        <h2>{movie.title}</h2>
        {movie.original_language !== language && (
          <h3>Original title: {movie.original_title}</h3>
        )}
        {movie.release_date && <p>Release date: {movie.release_date}</p>}
        <p>{movie.overview}</p>
      </Card>
    );
  });

  return (
    <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {list}
    </SimpleGrid>
  );
};
