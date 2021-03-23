import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './Requests';

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Adventure Movies' fetchUrl={requests.fetchAdventureMovies}/>
            <Row title='Sci-fi Movies' fetchUrl={requests.fetchScifiMovies}/>
            <Row title='Kids and Family Movies' fetchUrl={requests.fetchFamilyMovies}/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Fantasy Movies' fetchUrl={requests.fetchFantasyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Crime Movies' fetchUrl={requests.fetchCrimeMovies}/>
            <Row title='War Movies' fetchUrl={requests.fetchWarMovies}/>
            
        </div>
    )
};


export default HomeScreen
