import React from 'react'
import {FaBars,FaTh } from 'react-icons/fa'
import style from './NavBar.module.css'
import profilePic from '../../Logo/mazdaLogo.png'

const NavBar = () => {
    return (
        <nav className={style.navBar}>
           <div className={style.leftArea}>
            <ul>
                <FaBars />
                <li>ALL</li>
                <li>IMAGES</li>
            </ul>
            </div> 

           <div className={style.rightArea}>
               <ul>
                   <li><FaTh /></li>
                   <li><img className={style.profilePic} src={profilePic} alt='profile'/></li>
               </ul>
               
            </div> 
        </nav>
    )
}

export default NavBar
