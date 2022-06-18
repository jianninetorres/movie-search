import React, { useEffect, useState } from "react";
import action from "./action/themoviedb";
import { ListMovies, MovieProps } from "./components/movie/movie";
import { Search } from "./components/search/search";

const App = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [query, setQuery] = useState("spiderman");

  const language = "en";

  const getMovies = async () => {
    try {
      const response = await action.getMovies(query);

      if (!response) {
        return;
      }

      setMovies(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies();
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search</h1>
      </header>
      <Search query={query} onChange={handleQueryChange} />
      <ListMovies movies={movies} language={language} />
    </div>
  );
};

export default App;
