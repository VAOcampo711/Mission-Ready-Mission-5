import React from 'react';
import { Link } from "react-router-dom";
import './details.css';
import { Stepper, Step } from 'react-form-stepper';

const Details = () => {
	return (
		<div>
			<div id="progress">
				<Stepper activeStep={1}>
					<Step label="Your Car" />
  					<Step label="Your Details" />
  					<Step label="Your Quote	" />
					<Step label="Purchase	" />
				</Stepper> 
			</div>
			<div id="topquestion">

			</div>
			<div id="driverdet">

			</div>
			<div id="caruse">
				
			</div>
			<div id="address">
				
			</div>
			<div id="email">
				
			</div>
			<div id="detailbutton"><Link to="/quotes"><button class="button9" >View My Quote</button></Link></div>
		</div>
	);
};

export default Details;