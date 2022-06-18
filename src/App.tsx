import { useEffect, useState } from "react";
import themoviedb from "./api/themoviedb";
import { ListMovies, MovieProps } from "./components/movie/movie";

const App = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [query] = useState("spiderman");

  const getMovies = async () => {
    try {
      const response = await themoviedb.get(`/movie?`, {
        params: {
          language: "en-us",
          query,
          api_key: process.env.REACT_APP_API_KEY,
        },
      });

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // const ListMovies = (movies: MovieProps[]): JSX.Element => {
  //   const list = movies.map((movie) => {
  //     return <li key={movie.id}>{movie.title}</li>;
  //   });

  //   return <ul>{list}</ul>;
  // };

  return (
    <div className="App">
      <header className="App-header">Movie Search</header>
      <ListMovies movies={movies} />
    </div>
  );
};

export default App;
