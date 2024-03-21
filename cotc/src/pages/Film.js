import imageone from './img/pic10.png'
import imagetwo from './img/woodlawn2.png'
import { Link, useNavigate } from 'react-router-dom'
import './cotcstyle.css';

const whichpage = "none";


function Film() {
	
	let navigate = useNavigate();
	
	const home = function () {navigate('/');};
	
	
  return (
  <body className="site">
<div className="bgmood">
    
	
	
	<div className="div1" onClick={home}> <h1 className="bgtext">Home</h1> </div>
	<div className="div1" > <h1 className="bgtext">Upcoming projects</h1> 
<p className="bgtext">Big N Hungry (TBA) : script in development</p>	</div>
	
	</div>
	
	
	
	
	</body>
	
  );
}

export default Film;
