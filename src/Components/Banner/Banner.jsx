import React from 'react'
import Netflixbannerlogo from '../../assets/image/logo.png'
import { Play, Info } from 'lucide-react'
import styles from './Banner.module.css'
import { useState, useEffect } from 'react'
import movieInstance from '../../Utility/MovieInstance'
import requests from '../../Utility/requestUrls'
const BANNER_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [bannerMovie, setBannerMovie] = useState(null);

    useEffect(() => {
        async function fetchBannerMovie() {
            // Simulate an API call to fetch the banner movie
            const request = await movieInstance.get(requests.fetchNetflixOriginals);

            setBannerMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        }
        fetchBannerMovie();
    }, []);

    function trancate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div className={styles.banner}
            style={{
                backgroundImage: `url(${BANNER_BASE}${bannerMovie?.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <div className={styles.Content}>
                {/* netflix image */}
                <img className={styles.logoImg} src={Netflixbannerlogo} alt="netflix logo" />
                {/* title */}
                <h1 className={styles.title}>{bannerMovie?.title || bannerMovie?.name}</h1>

                {/* description */}
                <p className={styles.description}>{trancate(bannerMovie?.overview, 120)}</p>
                {/* button */}
                <div className={styles.buttonContainer}> 
                    <button className={styles.button}><Play size={30} /> Play</button>
                    <button className={styles.button}><Info size={30} /> More Info</button>
                </div>

            </div>
            {/* feding */}
            <div className={styles.fadeBottom}>

            </div>

        </div>
    )
}

export default Banner
