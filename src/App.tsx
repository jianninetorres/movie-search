import React, { useEffect, useState } from "react";
import action from "./action/themoviedb";
import { ListMovies, MovieProps } from "./components/movie/movie";
import { Search } from "./components/search/search";
import { Container } from "@mantine/core";
import { Pagination } from "@mantine/core";

const App = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [query, setQuery] = useState("spiderman");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const language = "en";

  const getMovies = async (page: number) => {
    try {
      const response = await action.getMovies(query, page);

      if (!response) {
        return;
      }

      setMovies(response.results);
      setTotalPages(response.total_pages);
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

    getMovies(currentPage);
  }, [query, currentPage]);

  return (
    <Container size="lg">
      <div className="App">
        <header className="App-header">
          <h1>Movie Search</h1>
          <Pagination
            page={currentPage}
            onChange={setCurrentPage}
            total={totalPages}
          />
        </header>
        <Search query={query} onChange={handleQueryChange} />
        <ListMovies movies={movies} language={language} />
        <Pagination
          page={currentPage}
          onChange={setCurrentPage}
          total={totalPages}
        />
      </div>
    </Container>
  );
};

export default App;
