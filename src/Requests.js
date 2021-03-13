const API_KEY = "c0fb84dc324212774694a6daed5035d7";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchAmazonOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=1024`
}

export default requests;