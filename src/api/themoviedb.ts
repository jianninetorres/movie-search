import axios from "axios";

const language = "en";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search",
});

export const getMovies = async (query: string) => {
  try {
    const results = await api.get(
      `https://api.themoviedb.org/3/search/movie?`,
      {
        params: {
          language,
          query,
          api_key: process.env.REACT_APP_API_KEY,
        },
      }
    );
    return results.data;
  } catch (error) {
    console.log(error);
  }
};
