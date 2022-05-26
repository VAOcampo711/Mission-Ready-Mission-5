import React from "react";
import { Nav, NavLink, NavLink2, NavMenu } from "./NavbarElements";
import logo from './turner-logo.jpg'
import phone from './phone.jpg'
import person from './person.png'

const Navbar = () => {
	return (
		<>
		<Nav>
			<NavMenu>
				<NavLink to="/" activeStyle>
					<img src={logo} width={250} height={50}  alt="Logo" />
		    	</NavLink>
		    	<NavLink to="#" activeStyle>
			    	Buy a Car
		    	</NavLink>
		    	<NavLink to="#" activeStyle>
			    	How to Sell
		    	</NavLink>
		    	<NavLink to="#" activeStyle>
			    	Turners Subscription
		    	</NavLink>
		    	<NavLink to="#" activeStyle>
			    	Finance
		    	</NavLink>
				<NavLink to="/" activeStyle>
			    	Insurance
		    	</NavLink>
				<NavLink2 to="#" activeStyle>
					<img src={person} width={25} height={20}  alt="Person" /> 
			    	Join Turners
		    	</NavLink2>
				<NavLink2 to="#" activeStyle>
					<img src={phone} width={20} height={20}  alt="Phone" />
			    	Contact Us
		    	</NavLink2>
			</NavMenu>
		</Nav>
		</>
	);
};

export default Navbar;