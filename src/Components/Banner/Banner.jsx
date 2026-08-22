import React from 'react'
import Netflixbannerlogo from '../../assets/image/logo.png'
import { Play, Info } from 'lucide-react'
import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.Content}>
                {/* netflix image */}
                <img className={styles.logoImg} src={Netflixbannerlogo} alt="netflix logo" />
                {/* title */}
                <h1 className={styles.title}>Bridgerton</h1>

                {/* description */}
                <p className={styles.description}>A young woman in the 1800s navigates the complexities of society and romance.</p>
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
