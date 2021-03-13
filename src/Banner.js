import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';


function Banner() {

    const [movie, setMovies] = useState([]);
    const baseurl_image = 'https://image.tmdb.org/t/p/original/';


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchAmazonOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request
        }
        fetchData();
    }, []);
    return (
        <header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'

        }}>
            
        </header>
    )
}

export default Banner
