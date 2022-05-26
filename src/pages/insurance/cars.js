import React from 'react';
import './cars.css';
import { Link } from "react-router-dom";
import { Stepper, Step } from 'react-form-stepper';

const Car = () => {
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
			<section id="car-fill">
				<div id="car-form">
					<h2>Enter Number Plate</h2>
					<br />
					<input type="text" id="platenum" name="platenum" />
					<br />
					<br />
					<br />
					<br />
					<br />
					<p id="random">By make/model</p>
					<br />
					<div id="dropdown">
						<select id="caroption" name="caroption">
							<option> </option>
    						<option>BMW</option>
    						<option>Toyota</option>
    						<option>Honda</option>
    						<option>Mazda</option>
							<option>Ford</option>
							<option>Nissan</option>
							<option>Suzuki</option>
  						</select>
					</div>
					
				</div>
			</section>
			<div id="car-button">
				<Link to="/"><button class="button" >Back</button></Link>
				<Link to="/cardetails"><button class="button" >Next</button></Link>
			</div>
		</div>
	);
};

export default Car;