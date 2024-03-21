import imageone from './img/pic10.png'
import imagetwo from './img/woodlawn2.png'
import imagethree from './img/woodlawntitle2.png'
import audioone from "./img/hoveraudio.WAV"
import { Link, useNavigate } from 'react-router-dom'

import photo from './img/screen.png'
import photo1 from './img/screen2.png'
import photo2 from './img/screen3.png'

import 'react-slideshow-image/dist/styles.css';
import {Fade, Zoom, Slide} from 'react-slideshow-image';

import React , { useState } from 'react';


import './cotcstyle.css';


function Store() {
	
 const audio = new Audio(audioone);
 const woodlawnred = function (){
	 var link2site = 'https://store.steampowered.com/app/2071920/Woodlawn__The_End_of_the_World/';
	 window.location(link2site);
	 
 }
	
	const imagesforslide = [photo,photo1,photo2];
	let navigate = useNavigate();
	

	
	const navstore = function () {
   
    navigate('/');
  };
  return (
  <body className="site">
<div className="bgmood">
    <div className="div1" onMouseOver ={ () => {audio.play()}}> <h1 className="bgtext">Children of the corn store</h1>
	<img src={imagethree} className = "im1" />
	<p className="bgtext">Woodlawn : The end of the World</p>
	<p className="bgtext">price : $19.99</p>
	
	<p className="bgtext">"Woodlawn : The End of the World" is a third person shooter/ hack and slash action/horror game. The player can fight of various monsters while 
	achieving objective goals to save the city of Woodlawn and the rest of the world.</p>
	<form action="/pay" method="post">
	<button className="bbutton"> purchase </button>
	</form>
	
	</div>
	
	
	
	
	
	
	<div className="div1" onMouseOver ={ () => {audio.play()}}> <h1 className="bgtext">Home</h1> </div>
	<a href = 'https://store.steampowered.com/app/2071920/Woodlawn__The_End_of_the_World/'>
	<div className="div1" onMouseOver ={ () => {audio.play()}} onClick={navstore}> <h1 className="bgtext">View on steam</h1> </div></a>




	
	
	</div>
	
	<Fade>
	 <div className="div2">
	 <img src={imagesforslide[0]} className = "im2"/>
	 </div>
	 <div className="div2">
	 <img src={imagesforslide[1]} className = "im2"/>
	 </div>
	 <div className="div2">
	 <img src={imagesforslide[2]} className = "im2"/>
	 </div>
	  </Fade>
	
	
	
	</body>
	
  );

}

export default Store;