import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useEffect } from 'react';
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import SnackBarComponent from './components/SnackBarComponent';

function App() {

  const { t } = useTranslation();
  useEffect(()=> {
      // Sélectionnez les éléments HTML à animer
      const sectionsWithParallax = document.querySelectorAll('.parallax');

      // Fonction pour mettre à jour la position de l'arrière-plan en fonction du défilement
      function updateParallax() {
          const scrollPosition = window.scrollY;

          // Appliquer le déplacement parallaxe à chaque section avec la classe "parallax"
          sectionsWithParallax.forEach(section => {
              const offsetTop = section.offsetTop;
              const distanceFromTop = offsetTop - scrollPosition;
              const parallaxAmount = distanceFromTop * 0.5; // Ajustez le facteur de parallaxe selon votre préférence
              section.style.backgroundPositionY = parallaxAmount + 'px';
          });
      }

      // Écouter l'événement de défilement de la fenêtre et appeler la fonction de mise à jour
      window.addEventListener('scroll', updateParallax);


  let projectId = '65ec6bd3175bb21b06b57dd9' 

  if(i18next.language === 'en'){
    projectId = "65bf733665e7726cb37fb0d1"
  }else{
    projectId = "65ec6bd3175bb21b06b57dd9"
  }
  
  console.log(projectId);
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: projectId },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
  
    

  },[localStorage.getItem('locales')])
  return (
    <>
    {console.log(t('web'))}
    <Nav/>
    <Header/>
    <Main/>
    <Contact/>
    <Footer/>
    <Modal/>
    <SnackBarComponent />
    </>)
}

export default App;
