import React from 'react';
import './cars-details.css';
import { Link } from "react-router-dom";
import { Stepper, Step } from 'react-form-stepper';
import bmw from './bmw.webp';
import bino from './bino.jpg';

const CarDet = () => {
	return (
		<div>
			<div id="progress">
				<Stepper activeStep={0}>
					<Step label="Your Car" />
  					<Step label="Your Details" />
  					<Step label="Your Quote	" />
					<Step label="Purchase	" />
				</Stepper> 
			</div>
			<section id="car-fill2">
				<div id="car-form2">
					<h2>We've found your Car. <br /> Nice Wheels!</h2>
					<br />
					<br />
					<h3 id="carinfo">
						<img src={bmw} id ="bmw"  alt="Car"  align="right" />
						2008 BMW 3 Series <br />
						RWD <br />
						2 Coupe 6 <br />
						2.5 <br />
						White <br />
					</h3>
					<div id="binoimage">
					<img src={bino} id ="bmw2"  alt="Car" />
					</div>
				</div>
			</section>
			<div id="car-button">
				<Link to="/cars"><button class="button2" >Back</button></Link>
				<Link to="/details"><button class="button2" >Next</button></Link>
			</div>
		</div>
	);
};

export default CarDet;