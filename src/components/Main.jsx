import React from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <main>
      <section className="scSiteWB parallax">
        <div className="container" id="web">
          <div className="scSite ">
            <div className="scSite__1 wow fadeInLeft">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>

            <div className="scSite__2 wow fadeInRight">
              <h1>{t('web')}</h1>

              <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4 web-col-1">
                  <p>
                    {" "}
                    {t('web_p1')}
                  </p>
                  <p>
                  {t('web_p2')}
                  </p>
                </div>

                <div className="col-md-7 col-lg-8">
                  <img
                    src="videos/WEBSITE_animation-ezgif.com-crop.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scSiteSD parallax">
        <div className="container" id="software">
          <div className="scSite ">
            <div className="scSite__2 wow fadeInLeft">
              <h1>{t('software')}</h1>

              <div className="row justify-content-center ">
                <div className="col-md-7 col-lg-8">
                  <img
                    src="videos/video-software-rduite-ezgif.com-crop.gif"
                    alt=""
                  />
                </div>

                <div className="col-md-5 col-lg-4">
                  <p>
                    {t('soft_p1')}
                  </p>
                  <p>
                    {t('soft_p2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="scSite__1 wow fadeInRight">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>
          </div>
        </div>
      </section>
     

      <section className="scSiteBP parallax">
        <div className="container" id="branding">
          <div className="scSite">
            <div className="scSite__1">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>

            <div className="scSite__2 wow fadeInRight">
              <h1>{t('branding')}</h1>

              <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4 brand-col-1">
                  <p>
                    {t('branding_p1')}
                  </p>
                  <p>
                  {t('branding_p2')}
                  </p>
                </div>

                <div className="col-md-7 col-lg-8">
                  <img
                    src="videos/vido-branding-rduite-ezgif.com-crop.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="scSiteBrand parallax">
        <div className="container" id="social">
          <div className="scSite">
            <div className="scSite__2 wow fadeInLeft">
              <h1>{t('social')}</h1>

              <div className="row justify-content-center  ">
                <div className="col-md-7 col-lg-7 vid-par">
                  <img
                    src="videos/SOCIAL_animation-ezgif.com-crop.gif"
                    alt=""
                  />
                </div>

                <div className="col-md-5 col-lg-4 sect-par">
                  <p>
                    {t('social_p1')}
                  </p>
                  <p>
                   {t('social_p2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="scSite__1 wow fadeInRight">
              <img src="videos/matrix-rduite-ezgif.com-optimize.gif" alt=""/>
            </div>
          </div>
        </div>
      </section>
      <section id="lifecycle">
        <div className="container">
          <div className="lifecycle wow fadeInLeft">
            <h1>Project lifEcycle</h1>
            <div className="lifecycle-img-container">
              <img src="images/LIFECYCLE.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
