import React, {useState} from 'react'
import style from '../App.module.css'
import defaultLogo from '../Logo/mainLogo.png'
import {FaSearch, FaMicrophone} from 'react-icons/fa'


const Home = () => {
    const [searchText, setSearchText] = useState('');

    const updateSearchText = (val)=>{
        setSearchText(prev => val)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setSearchText(prev => '')
    }


    return (
        <div className={style.home}>
            {
              searchText ? <p>{searchText}</p>: <img src = {defaultLogo} className={style.logo} alt='main logo'/>  
            }
            <form onSubmit={handleSubmit}>
                
                <FaSearch className={style.icon}/>

                <input type='text' value={searchText} onChange={(e)=>updateSearchText(e.target.value)} className={style.input} required={true} placeholder='Search SideHustle or type a URL'/>
                <FaMicrophone className={style.iconMic}/>
            </form>

            <div className={style.info}>
                <h5>Google offered in:</h5>
                <ul>
                    <li>Hausa</li>
                    <li>Igbo</li>
                    <li>E&#768;de&#768;</li>
                    <li>Yoru&#768;ba&#769;</li>
                    <li>Nigerian Pidgin</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
