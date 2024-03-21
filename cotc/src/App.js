import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React , { useEffect, useState } from 'react';
import Store from './pages/Store'
import Homepage from './pages/Homepage'
import Games from './pages/Games'
import Film from './pages/Film'
import About from './pages/About'
import Woodlawn from './pages/Woodlawn'



function App() { 

const[backendData,setBackendData] = useState([{}])

useEffect(()=>{
	fetch("/api").then(response => response.json()).then(data=>{setBackendData(data)}
	)
	
}, [])


  return (
  <div>
	<BrowserRouter>
		<Routes>
			<Route index element={<Homepage />}/>
			<Route path="/" element={<Homepage/>} />
			<Route path="/Store" element={<Store/>} />
			<Route path="/Games" element={<Games/>} />
			<Route path="/Film" element={<Film/>} />
			<Route path="/About" element={<About/>} />
			<Route path="/Woodlawn" element={<Woodlawn/>} />
		</Routes>
	</BrowserRouter>
  </div>
	
  );
}



export default App;



















