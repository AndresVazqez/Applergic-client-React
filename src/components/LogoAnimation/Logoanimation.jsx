/* import React from 'react';
import anime from "animejs";
import "./Logoanimation.scss"
import {ReactComponent as ReactLogo} from '../../../src/logo.svg';


const logoAnimation = anime.timeline({ 
  autoplay: true,
  delay: 200
});

logoAnimation.add({
  targets: '#logo',
  translateY: [-100, 0],
  opacity: [0, 1],
  elasticity: 600,
  duration: 1600
}).add({
  targets: '#logo-hexagon',
  rotate: [-90, 0],
  duration: 1200,
  elasticity: 600,
  offset: 100
}).add({
  targets: '#logo-circle',
  scale: [0, 1],
  duration: 1200,
  elasticity: 600,
  offset: 500
}).add({
  targets: '#logo-mask',
  scale: [0, 1],
  duration: 1000,
  elasticity: 600,
  offset: 550
}).add({
  targets: '#logo-text',
  translateX: ['-100%', 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutExpo',
  offset: 1000
})

// restart.addEventListener("click", () => logoAnimation.restart());


const Logoanimation = () => {
  return <div>

<div class="site-logo">
  <figure id="logo">
    <svg width="100%" height="100%" viewBox="0 0 148 128">
      <defs>
        <mask id="circle-mask">
          <rect fill="white" width="100%" height="100%"></rect>
          <circle id="logo-mask" fill="black" cx="120" cy="96" r="28"></circle>
        </mask>
      </defs>
     <ReactLogo />
    </svg> 
  </figure>
  <div class="site-title">
    <div id="logo-text" class="site-title-text">
      App<span>lergic</span>
    </div>
  </div>
</div>      
  </div>;
};

export default Logoanimation;
 */