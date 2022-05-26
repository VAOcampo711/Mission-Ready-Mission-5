import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
import HomeCar from './home-car.jpeg';
import Car1 from './Car1.jpg';
import Car2 from './Car2.jpg';
import Car3 from './Car3.jpg';

const Home = () => {
	return (
		<div>
			<div class="rectangle">
				<p class="text1">We've made it easier to get <br />Turners Car Insurance online.</p>
				<p class="text2">Try our new quick quote process <br /><br />
				<Link to="/cars"><button class="button" >Get Quote</button></Link></p>
				<img src={HomeCar} class ="home-image"  alt="Home" align="right" />
			</div>
			<section id="content">
				<div id="insurance">
					<ul id="list">
						<li class="compare">
							<div class="info">
								<img src={Car1}  alt="Car1" class="carimg" />
								<div class="infoheader"><h3>Third Party Insurance</h3><br />
								<p>What's included in our cover</p><br /></div>
								<ul class="points">
									<li>Damage to other people's property up to $30 million</li>
									<li>Damage caused by an identified uninsured driver up to $5,000</li>
									<li>Change of car - cover automatically shifts to your new car, for up to 14 days</li>
								</ul>
								<div class="divbutton"><Link to="/cars"><button class="button">Get Quote</button></Link></div>
							</div>
						</li>
						<li class="compare">
							<div class="info">
								<img src={Car2}  alt="Car2" class="carimg" />
								<div class="infoheader"><h3>Comprehensive Car Insurance</h3><br />
								<p>What's included in our cover</p><br /></div>
								<ul class="points">
									<li>Accident damage, fire and theft</li>
									<li>Three year new car replacement (conditions apply)</li>
									<li>Hire car when you're not at fault in a car accident</li>
									<li>Lifetime repair guarantee, for as long as you own the car</li>
									<li>Damage to other people's property up to $30 million</li>
								</ul>
								<div class="divbutton"><Link to="/cars"><button class="button">Get Quote</button></Link></div>
							</div>
						</li>
						<li class="compare">
							<div class="info">
								<img src={Car3}  alt="Car3" class="carimg" />
								<div class="infoheader"><h3>Mechanical Breakdown Insurance</h3><br />
								<p>What's included in our cover</p><br /></div>
								<ul class="points">
									<li>Accepted at your dealership or by any licensed mechanic</li>
									<li>Includes a 7-day-money-back guarantee</li>
									<li>24-hour roadside assistance</li>
									<li>Coverage backed by long-standing insurance companies</li>
								</ul>
								<div class="divbutton"><Link to="/cars"><button class="button">Get Quote</button></Link></div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Home;