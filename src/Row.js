import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios'

function Row({title, fetchUrl}){

    const [movies, setMovies] = useState([]);
    const baseurl_image = 'https://image.tmdb.org/t/p/original/';
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row">
            <div className="row__title">
                <h3>{title}</h3>
            </div>
            <div className="row__contents">
                {movies.map(movie => (
                    <img
                    className="row__image"
                     key={movie?.id} src={`${baseurl_image}${movie?.backdrop_path}`} alt={movie?.name} />
                ))}
            </div>
            
                    
        </div>
    )
}

export default Row
