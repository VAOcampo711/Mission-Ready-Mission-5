import React from 'react';
import { Link } from "react-router-dom";
import { Stepper, Step } from 'react-form-stepper';
import './quotes.css';

const Quotes = () => {
	var tpamount = "69";
	var ccamount = "139";
	var mbamount = "49";
	return (
		<div>
			<div id="progress">
				<Stepper activeStep={2} activeColor={'blue'}>
					<Step label="Your Car" />
  					<Step label="Your Details" />
  					<Step label="Your Quote	" />
					<Step label="Purchase	" />
				</Stepper> 
			</div>
			<div id="quotetext">
				<p id="qs">Our customers with a <b>2008 BMW 3 Series</b> usually choose</p>
				<h1>Comprehensive Car Insurance</h1>
				<div id="toggle">
					<b>Pay <br /> Monthly</b>
					<label class="switch">
  						<input type="checkbox" id="myCheck" />
  						<span class="slider round"></span>
					</label>
					<p><b>Pay <br /> Yearly</b><br /><p style={{color: "red"}}>(Save 10%)</p></p>
				</div>
			</div>
			<section id="content2">
				<div id="insurance2">
					<ul id="list2">
						<li class="compare2">
							<div class="info">
								<div class="infoheader2"><h2>Third Party Insurance</h2><hr class="new2" /><br /><br /></div>
								<h2>${tpamount} <br /> Per Month </h2><br /><br />
								<ul class="points2">
									<li>Damage to other people's property up to $30 million</li>
									<li>Damage caused by an identified uninsured driver up to $5,000</li>
									<li>Change of car - cover automatically shifts to your new car, for up to 14 days</li>
								</ul>
								<div class="divbutton2"><Link to="#"><button class="button3">Buy Now</button></Link></div>
							</div>
						</li>
						<li class="compare2">
							<div class="info3">
								<div class="infoheader3"><h2>Comprehensive Car Insurance</h2><hr class="new1" /><br /><br />
								<h2>${ccamount} <br /> Per Month </h2><br /><br /></div>
								<ul class="points3">
									<li>Accident damage, fire and theft</li>
									<li>Three year new car replacement (conditions apply)</li>
									<li>Hire car when you're not at fault in a car accident</li>
									<li>Lifetime repair guarantee, for as long as you own the car</li>
									<li>Damage to other people's property up to $30 million</li>
								</ul>
								<div class="divbutton2"><Link to="#"><button class="button3">Buy Now</button></Link></div>
							</div>
						</li>
						<li class="compare2">
							<div class="info2">
								<div class="infoheader2"><h2>Mechanical Breakdown Insurance</h2><hr class="new2" /><br /><br /></div>
								<h2>${mbamount} <br /> Per Month </h2><br /><br />
								<ul class="points2">
									<li>Accepted at your dealership or by any licensed mechanic</li>
									<li>Includes a 7-day-money-back guarantee</li>
									<li>24-hour roadside assistance</li>
									<li>Coverage backed by long-standing insurance companies</li>
								</ul>
								<div class="divbutton2"><Link to="#"><button class="button3">Buy Now</button></Link></div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<div id="car-button5">
				<Link to="/details"><button class="button5" >Back</button></Link>
				<Link to="#"><button class="button5" >View Policy Details</button></Link>
				<Link to="#"><button class="button5" >Save</button></Link>
			</div>
			<div id="recalculate">
				<h3><span class="recalc2">Add Windscreen Protection  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" /></span></h3>
				<br /><br /><br /><br />
				<h3><span class="recalc2">Hire Car Protection  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" /></span></h3>
				<br /><br /><br /><br />
				<h3><span class="recalc2">Change to $0 Excess  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="checkbox" /></span></h3>
				<br /><br /><br /><br />
				<Link to="#"><button class="button6" >Recalculate</button></Link>
			</div>
			<div id="car-button5">
				<Link to="/details"><button class="button5" >Back</button></Link>
				<Link to="#"><button class="button3">Buy Now</button></Link>
				<Link to="#"><button class="button5" >Save</button></Link>
			</div>
		</div>
	);
};

export default Quotes;