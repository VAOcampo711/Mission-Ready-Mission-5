import React from 'react';
import { Link } from "react-router-dom";
import './detailsfilled.css';
import { Stepper, Step } from 'react-form-stepper';

const DetailsFilled = () => {
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
			<Link to="/cardetails"><button class="button2" >Back</button></Link>
			<Link to="/quotes"><button class="button2" >Next</button></Link>
		</div>
		
	);
};

export default DetailsFilled;