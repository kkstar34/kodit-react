import React from 'react'

function Nav() {
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
                       
                        <span className="se "> Services <i className="fas fa-chevron-down"></i></span>

                        <ul className="sub-menu ">
                           

                            <a href="#web">
                                <li>Web development</li>
                            </a>

                            <a href="#software">
                                <li>Software Development</li>
                            </a>

                          


                            <a href="#branding">
                                <li>Branding and Design</li>
                            </a>

                            <a href="#social" >
                                <li>Social Media Management</li>
                            </a>


                            
                        </ul>
                    </li>

                    <li>
                        <a href="#contact-form" className="t"> Start Building </a>
                    </li>

                    <li type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        
                        <a href="#about">About us</a>
                    </li>

                    <li>
                        <div className="li-lang">
                            <span style={{color:"white"}} className="sp-lang">FR  <i className='fas fa-chevron-down'></i></span>
                            <div className="lang">
                                <ul>
                                  <a href="index-fr.html" >
                                    <li>FR</li>
                                  </a>
                                  <a href="index.html" >
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