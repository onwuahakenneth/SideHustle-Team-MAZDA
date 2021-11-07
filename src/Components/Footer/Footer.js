import React from 'react'
import style from './Footer.module.css'

const footerLinks = ['Settings', 'Privacy', 'Terms', 'Advertising', 'Business', 'About']

const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className={style.country}>Nigeria</div>
            <div className={style.links}>
                <ul>
                    {
                        footerLinks.map((link, index)=>(
                            <li key={index}>{link}</li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer
