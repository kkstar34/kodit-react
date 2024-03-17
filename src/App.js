import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useEffect } from 'react';

function App() {

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




      
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '65bf733665e7726cb37fb0d1' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');

  },[])
  return (
    <>
    <Nav/>
    <Header/>
    <Main/>
    <Contact/>
    <Footer/>
    <Modal/>
    </>)
}

export default App;
