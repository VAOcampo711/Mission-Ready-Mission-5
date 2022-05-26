import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
background: white;
height: 85px;
justify-content: center;
z-index: 12;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
`;

export const NavLink = styled(Link)`
display: flex;
color: black;
align-items: center;
text-decoration: none;
font-size: 20px;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: bold;
`;

export const NavLink2 = styled(Link)`
display: flex;
color: black;
align-items: center;
text-decoration: none;
font-size: 20px;
margin-left: 50px;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: bold;
`;