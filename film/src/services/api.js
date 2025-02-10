const API_KEY = "18fcafc4ce2a68bdd61d7299177ddf70"
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/seach/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);

    const data = await response.json()
    return data.results
};
