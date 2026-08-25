import React from 'react'
import style from './DisplayRow.module.css'
import SlideShow from '../SlideShow/SlideShow'
import { movies } from '../../Data/Data'
import { useState, useEffect } from 'react'
import movieInstance from '../../Utility/MovieInstance'
import requests from '../../Utility/requestUrls'

function DisplayRow() {

    const [movies, setMovies] = useState({
        trending: [],
        netflixOriginals: [],
        topRated: [],
        action: [],
        comedy: [],
        horror: [],
        romance: [],
        documentaries: []

    });

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const [trendingRes, netflixRes, topRatedRes, actionRes, comedyRes, horrorRes, romanceRes, documentariesRes] = await Promise.all([
                movieInstance.get(requests.fetchTrending),
                movieInstance.get(requests.fetchNetflixOriginals),
                movieInstance.get(requests.fetchTopRatedMovies),
                movieInstance.get(requests.fetchActionMovies),
                movieInstance.get(requests.fetchComedyMovies),
                movieInstance.get(requests.fetchHorrorMovies),
                movieInstance.get(requests.fetchRomanceMovies),
                movieInstance.get(requests.fetchDocumentaries)
            ]);

            setMovies({
                trending: trendingRes.data.results,
                netflixOriginals: netflixRes.data.results,
                topRated: topRatedRes.data.results,
                action: actionRes.data.results,
                comedy: comedyRes.data.results,
                horror: horrorRes.data.results,
                romance: romanceRes.data.results,
                documentaries: documentariesRes.data.results
            });

        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return (
        <div className={style.displayRow}>
            <SlideShow title="TV Shows" movies={movies.trending} />
            <SlideShow title="New Releases" movies={movies.netflixOriginals} />
            <SlideShow title="Top Picks" movies={movies.topRated} />
        </div>
    )
}

export default DisplayRow
