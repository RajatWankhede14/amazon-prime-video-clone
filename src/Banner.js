import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Banner() {

    const [movie, setMovies] = useState([]);
    const baseurl_image = 'https://image.tmdb.org/t/p/original/';
    movie.length = 12;


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchAmazonOriginals);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, []);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }
    return (
        <header className="banner">
            <Carousel>
                {movie.map(m => (
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={`${baseurl_image}${m?.backdrop_path}`}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{m?.name || m?.title}</h3>
                            <p>{truncate(`${m?.overview}`, 120)}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
               
            </Carousel> 
        
        </header>
    )
}

export default Banner;
