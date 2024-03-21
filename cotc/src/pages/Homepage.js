
import imageone from './img/pic10.png'
import imagetwo from './img/woodlawn2.png'
import imagethree from './img/soldier.png'
import imagefour from './img/woodlawntitle2.png'
import { Link, useNavigate } from 'react-router-dom'
import './cotcstyle.css';

const whichpage = "none";


  
  
function Homey() {
	
	let navigate = useNavigate();
	
	const navstore = function () {navigate('/Store');};
	const navgame = function () { navigate('/Games');};
	const navabout = function () {navigate('/About');};
	const navwoodlawn = function () { navigate('/Woodlawn');};
	const navfilm = function () {navigate('/Film');};
	
	
	
  return (
  <body className="site">
  
 
<div className="bgmood">

 
    <div className="div1" onClick={navabout}> <h1 className="bgtext">About Children of the corn</h1> </div>
	<div className="div1"  onClick={navstore}> <h1 className="bgtext">Games</h1> </div>
	<div className="div1" onClick={navfilm}> <h1 className="bgtext">Film</h1> </div>
	
	<div className="div1" onClick={navwoodlawn}> <h1 className="bgtext">The Woodlawn Story </h1> 
	<img src={imagetwo} className = "im1" />
	</div>
	<div className="div1" > <h1 className="bgtext">Contact</h1> <p className="bgtext">support@childrenofthecorngames.com</p> </div>
	
	</div>
	
	
	
	
	</body>
	
  );
}

function Contactp() {
	
	console.log("worked");
	
}

export default Homey;