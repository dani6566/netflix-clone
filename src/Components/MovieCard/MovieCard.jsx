import React from 'react'
import style from './MovieCard.module.css'
import { FaCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
    console.log(movie)
    let genres = ["Action", "Adventure", "Comedy"];
    return (
        <div className={style.cardWrapper}>
            {/* poster image */}
            <img className={style.poster} src={`${IMAGE_BASE_URL}${movie?.poster_path}`} alt="Movie Poster" />
            {/* hover card */}

            <div className={style.hoverCard}>
                {/* image */}
                <img className={style.hoverImage} src={`${IMAGE_BASE_URL}${movie?.poster_path}`} alt="Movie Poster" />
                {/* badge */}
                <div className={style.badge}>Recently added</div>
                {/* button row */}
                <div className={style.buttonRow}>
                    < FaCircle className={style.circleButton} color="white" size={30} />
                    <FaPlusCircle className={style.circleButton} color="white" size={30} />
                    <GoCheckCircle className={style.circleButton} color="white" size={30} />
                    <IoIosArrowDropdown className={style.circleButtonSmall} color="white" size={30} />
                </div>
                {/* metadata row */}

                < div className={
                    style.metaRow}>
                    <span className={style.tag}>U/A 16+</span>
                    <span className={style.tag}>Movie</span>
                    <span className={style.tag}>HD</span>
                </div>
                {/* genres */}
                < div className={
                    style.genres}>
                    {
                        genres.map((g, index) => (
                            <span key={index}>
                                {g}
                                {index < genres.length - 1 && <span className={style.dot}> • </span>}
                            </span>
                        ))
                    }
                </div>

            </div >
        </div >
    )
}

export default MovieCard
