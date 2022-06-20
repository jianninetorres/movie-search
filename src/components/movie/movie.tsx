import {
  Box,
  Card,
  Center,
  Image,
  RingProgress,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
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

const userScoreColour = (score: number): string => {
  if (score < 4.0) {
    return "#d62929";
  } else if (score < 7.0) {
    return "#f5e642";
  } else {
    return "#12b886";
  }
};

export const ListMovies = ({ movies, language }: Movies): JSX.Element => {
  const list = movies.map((movie) => {
    return (
      <Card
        key={movie.id}
        shadow="md"
        p="lg"
        component="a"
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        target="_blank"
      >
        <Card.Section>
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : defaultImage
            }
            height={160}
            alt={movie.title}
          />
        </Card.Section>
        <Box p="sm">
          <Box>
            <Title order={2}>{movie.title}</Title>
            <Center>
              <RingProgress
                size={100}
                sections={[
                  {
                    value: movie.vote_average * 10,
                    color: userScoreColour(movie.vote_average),
                  },
                ]}
                label={
                  <Text
                    color={userScoreColour(movie.vote_average)}
                    weight={700}
                    align="center"
                    size="sm"
                  >
                    {movie.vote_average * 10} %
                  </Text>
                }
              />
              <Text size="sm">User score</Text>
            </Center>
          </Box>

          {movie.release_date && (
            <Text color="grey" py="sm">
              Release date: {movie.release_date}
            </Text>
          )}
          <Text>{movie.overview}</Text>
        </Box>
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
