import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Bell, User, ChevronDown } from 'lucide-react'
import style from './Header.module.css'
import logo from '../../assets/image/logo.png'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.Container}>
                {/* logo */}
                <img className={style.logo} src={logo} alt="Logo" />
                {/* navigation link */}
                <div className={style.nav}>
                    <Link className={style.navLink} to="/">Home</Link>
                    <Link className={style.navLink} to="/tv-shows">TV Shows</Link>
                    <Link className={style.navLink} to="/movies">Movies</Link>
                    <Link className={style.navLink} to="/new-popular">New & Popular</Link>
                    <Link className={style.navLink} to="/my-list">My List</Link>
                    <Link className={style.navLink} to="/browse-language">Browse by Language</Link>
                </div>
                {/* right side section */}
                <div className={style.rightSection}>
                    <div className={style.searchContainer}>
                        <button className={style.searchButton}>
                            {/* search */}
                            <Search />
                        </button>
                    </div>
                    <button className={style.notificationButton}>
                        {/* notifications */}
                        <Bell />
                    </button>
                    <button className={style.profileButton}>
                        {/* profile */}
                        <div className={style.profileContainer}>
                            <User />
                            <ChevronDown />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
