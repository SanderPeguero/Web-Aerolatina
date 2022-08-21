
//Pie de pagina
//https://react-icons.github.io/react-icons/
// npm install react-icons

import React from 'react'
//import Logo from '../../images/Logo.svg'
import styles from './Footer.module.css'

const Footer = () => {

    return (
        <div>
            <footer className='text-white bg-dark'>
                <div className={styles.container}>
                    
                    <hr />
                    <nav className="row">

                        <ul className='col-12 col-md-3 list-unstyled'>

                            <li className='font-weight-bold mb-2 text-center'>
                                <h4>About Us </h4>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    Our Company
                                </a>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    Our Team
                                </a>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    Regional Experience
                                </a>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    Certifications
                                </a>
                            </li>

                        </ul>

                        <ul className='col-12 col-md-3 list-unstyled'>

                            <li className='font-weight-bold mb-2 text-center'>
                                    <h4>Services</h4>
                            </li>

                            <li className='text-center'>
                                <a href="/examenes" className={styles.footerlinks}>
                                    <i className="bi bi-clipboard2-fill"> Exams</i>
                                </a>
                            </li>

                            <li className='text-center'>
                                <a href="/clasesVuelo" className={styles.footerlinks}>
                                <i className="bi bi-symmetry-horizontal"> Flight Class</i>
                                </a>
                            </li>

                            <li className='text-center'>
                                <a href="/rentaAeronaves" className={styles.footerlinks}>
                                    <i className="bi bi-ui-radios"> Aircraft Rental</i>
                                </a>
                            </li>

                        </ul>

                        <ul className='col-12 col-md-3 list-unstyled'>
                                
                            <li className='font-weight-bold mb-2 text-center'>
                                <h4>Contact us </h4>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                <i className='bi bi-facebook'> Facebook</i>
                                </a>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    <i className='bi bi-twitter'> Twitter</i>
                                </a>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    <i className='bi bi-instagram'> Instagram</i>
                                </a>
                            </li>
                                
                            <li className='text-center'>
                                <a href="/" className={styles.footerlinks}>
                                    <i className='bi bi-youtube'> Youtube</i>
                                </a>
                            </li>
                                
                        </ul>

                    </nav>
                </div>
            </footer>
        </div>
    )

}

export default Footer