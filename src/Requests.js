const API_KEY = "c0fb84dc324212774694a6daed5035d7";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchAmazonOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
    // Movies
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_movies=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_movies=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_movies=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_movies=35`,
    fetchFamilyMovies: `/discover/tv?api_key=${API_KEY}&with_movies=1075`,
    fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_movies=878`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_movies=14`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_movies=27`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_movies=80`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_movies=10752`,
}

export default requests;