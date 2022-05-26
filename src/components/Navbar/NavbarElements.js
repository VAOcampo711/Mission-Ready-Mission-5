import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
background: white;
height: 85px;
display: flex;
justify-content: center;
z-index: 12;
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
@media screen and (max-width: 1100px) {
    display: none;
}
`;

export const NavLink1 = styled(Link)`
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
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: bold;
margin-left: 50px;
@media screen and (max-width: 768px) {
    display: none;
}
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

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;