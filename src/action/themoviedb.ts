import * as api from "../api/themoviedb";

const getMovies = (query: string, page: number) => {
  return api.getMovies(query, page);
};

const actions = {
  getMovies,
};

export default actions;
