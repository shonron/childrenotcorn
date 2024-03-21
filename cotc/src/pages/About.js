import imageone from './img/pic10.png'
import imagetwo from './img/woodlawn2.png'
import logo from './img/logo1.png'
import audioone from "./img/hoveraudio.WAV"




import { Link, useNavigate } from 'react-router-dom'
import React , { useState } from 'react';
import './cotcstyle.css';
import 'react-slideshow-image/dist/styles.css';
import {Fade, Zoom, Slide} from 'react-slideshow-image';




function About() {
	
	const audio = new Audio(audioone);
	let navigate = useNavigate();
	
	const home = function () {navigate('/');};
	
	return (
     <body className="site">
	 <div className="bgmood">
	 <div className="div1" onMouseOver ={ () => {audio.play()}}> <h1 className="bgtext">About Children of the corn</h1> 
	 
	 <p className="bgtext">Children of the Corn LLC was founded on February 11, 2021 in Chicago, Illinois. 
	 It created the “Woodlawn series” with the first installment ‘Woodlawn : The End of the World’ 
	 being released in March 2024. There are currently 2 more titles in the works with unannounced 
	 release dates.

	 </p>
	 <img src={logo} className = "im1" />
	 </div>
	 
	 
	
	
	 
	 
	 
	 
	 
	
	 
	 <div className="div1" onMouseOver ={ () => {audio.play()}} onClick={home}> <h1 className="bgtext">Home</h1> </div>
	 
	 
	 </div>
	 
	
	 
	 
	 </body>
    );
	
}
export default About