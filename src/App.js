import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import Car from './pages/insurance/cars';
import CarDet from './pages/insurance/cars-details';
import Details from './pages/insurance/details';
import DetailsFilled from './pages/insurance/detailsfilled';
import Quotes from './pages/insurance/quotes';

function App() {
  	return (
	  <Router>
	  	<Navbar />
	  	<Routes>
			  <Route path='/' element={<Home />} />
			  <Route path='/cars' element={<Car/>} />
			  <Route path='/cardetails' element={<CarDet/>} />
			  <Route path='/details' element={<Details/>} />
			  <Route path='/detailsfilled' element={<DetailsFilled/>} />
			  <Route path='/quotes' element={<Quotes/>} />
	  	</Routes>
	  	</Router>
  	);
}

export default App;