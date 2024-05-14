import React from 'react'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
  return (
<footer className="footer container">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <h5>Services</h5>
                    <ul className="footer-services">

                        <li>
                            <a href="#web">{t('web')}</a>
                        </li>

                        <li>
                            <a href="#software">{t('software')}</a>
                        </li>
                        
                        <li>
                            <a href="#branding">{t('branding')}</a>
                        </li>

                        <li>
                            <a href="#social">{t('social')}</a>
                        </li>
                       
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 contact-us">
                    <h5>{t('contact_us')}</h5>
                    <p>Rue Paul Langevin, Abidjan, Côte d'Ivoire</p>
                    <p>Email: info@kodit.ai</p>
                    <p>Phone: +225 0700999990</p>
                </div>
                <div className="col-md-6 col-lg-4 follow-us">
                    <h5>{t('follow_us')}</h5>
                    <ul className="footer-social-icons">
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Koditxai">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kodit.ai?igsh=MXF1a3pmbjl2OHQ5cw== ">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row copyright">
                <div className="col">
                    <p className="text-center">
                        © 2024 KODIT. {t('all_rights')}
                      
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer