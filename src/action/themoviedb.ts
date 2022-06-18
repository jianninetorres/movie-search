import * as api from "../api/themoviedb";

const getMovies = (query: string) => {
  return api.getMovies(query);
};

const actions = {
  getMovies,
};

export default actions;
