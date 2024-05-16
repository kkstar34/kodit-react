import { changeLanguage } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

function Nav() {

    const { t } = useTranslation();

    
  return (
  
         <nav className="navigation">
        <div className="container-fluid">
            <div className="logo">
                <a href="/">
                    <img src="icons/LOGO WHITE.png" alt="logo" />
                </a>
            </div>

     

            <div className="menu" id="menu">
                <ul>
                    <li className="menu--exit">
                        <i className="fa fa-times"></i>
                    </li>

                    <li>
                       
                        <span className="se"> {t('services')} <i className="fas fa-chevron-down"></i></span>

                        <ul className="sub-menu ">
                           

                            <a href="#web">
                                <li> {t('web')}</li>
                            </a>

                            <a href="#software">
                                <li> {t('software')}</li>
                            </a>

                          


                            <a href="#branding">
                                <li> {t('branding')}</li>
                            </a>

                            <a href="#social" >
                                <li> {t('social')}</li>
                            </a>


                            
                        </ul>
                    </li>

                    <li>
                        <a href="#contact-form" className="t">  {t('start_building')} </a>
                    </li>

                    <li>
    <button className='blog' onClick={() => window.open("https://medium.com/@0xkodit", "_blank")}>
        Blog
    </button>
                   </li>


                    <li type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        
                        <a href="#about"> {t('about_us')}</a>
                    </li>

                    <li>
                        <div className="li-lang">
                          <span className="sreal">{i18next.language === "en" ? "EN" : "FR"}  <span style={{color:"white"}} className="sp-lang"> <i className='fas fa-chevron-down'></i></span></span> 
                            <div className="lang">
                                <ul>
                                  <a href="#fr" onClick={() => {
                                      localStorage.setItem('locales', "fr");
                                      changeLanguage("fr");
                                  } }>
                                    <li>FR</li>
                                  </a>
                                  <a href="#en" onClick={() =>{
                                      localStorage.setItem('locales', "en");
                                      changeLanguage("en");
                                  } }>
                                    <li>EN</li>
                                  </a>
                                </ul>
                              </div>
                        </div>
                       
                    </li>


                </ul>
            </div>

            
            <div className="menu--enter" id="menu--enter">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </nav>

  )
}

export default Nav