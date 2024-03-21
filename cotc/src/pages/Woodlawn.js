import imageone from './img/pic10.png'
import imagetwo from './img/woodlawn2.png'
import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import audioone from "./img/hoveraudio.WAV"
import './cotcstyle.css';

function About() {
	let navigate = useNavigate();
	
	const audio = new Audio(audioone);
	
	const home = function () {navigate('/');};
	
	
		
	const[level1, setLevel1] = useState(false);
	const[level2, setLevel2] = useState(false);
	const[level3, setLevel3] = useState(false);
	const[level4, setLevel4] = useState(false);
	const[level5, setLevel5] = useState(false);
	const[level6, setLevel6] = useState(false);
	const[level7, setLevel7] = useState(false);
	const[level8, setLevel8] = useState(false);
	const[level9, setLevel9] = useState(false);
	const[level10, setLevel10] = useState(false);
	const[level11, setLevel11] = useState(false);
	const[level12, setLevel12] = useState(false);
	const[level13, setLevel13] = useState(false);
	const[level14, setLevel14] = useState(false);
	const[level15, setLevel15] = useState(false);
	
	
	return (
	
	<body className="site">
	  
	 
	<div className="bgmood">
		<div className="div1" onClick={home} onMouseOver ={ () => {audio.play()}}> <h1 className="bgtext">Home</h1> </div>
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel1(!level1)}}>
		<h1 className="bgtext">Stage 1</h1> {level1 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel2(!level2)}}>
		<h1 className="bgtext">Stage 2</h1> {level2 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel3(!level3)}}>
		<h1 className="bgtext">Stage 3</h1> {level3 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel4(!level4)}}>
		<h1 className="bgtext">Stage 4</h1> {level4 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel5(!level5)}}>
		<h1 className="bgtext">Stage 5</h1> {level5 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel6(!level6)}}>
		<h1 className="bgtext">Stage 6</h1> {level6 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel7(!level7)}}>
		<h1 className="bgtext">Stage 7</h1> {level7 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel8(!level8)}}>
		<h1 className="bgtext">Stage 8</h1> {level8 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel9(!level9)}}>
		<h1 className="bgtext">Stage 9</h1> {level9 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel10(!level10)}}>
		<h1 className="bgtext">Stage 10</h1> {level10 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel11(!level11)}}>
		<h1 className="bgtext">Stage 11</h1> {level11 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel12(!level12)}}>
		<h1 className="bgtext">Stage 12</h1> {level12 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel13(!level13)}}>
		<h1 className="bgtext">Stage 13</h1> {level13 && <p className="bgtext">hello</p>}</div>
		
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel14(!level14)}}>
		<h1 className="bgtext">Stage 14</h1> {level14 && <p className="bgtext">hello</p>}</div>
		
		<div className="div1" onMouseOver ={ () => {audio.play()}} onClick = { function (){ setLevel15(!level15)}}>
		<h1 className="bgtext">Stage 15</h1> {level15 && <p className="bgtext">hello</p>}</div>
	</div>
	
	</body>


);

    	

    	
    	
    	
		
}

export default About