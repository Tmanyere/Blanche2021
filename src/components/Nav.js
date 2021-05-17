import React from 'react';
import {
   Navbar,
   Nav,
  InputGroup,
  FormControl,
   Button
} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

import styled from 'styled-components';
import {FiShoppingCart , FiSearch, FiUser } from 'react-icons/fi';
import Icon from '../assets/images/logo.png'

const Img = styled.img`
  height: 70px;
`
const FaShoppingCartIcon = styled(FiShoppingCart)`
  padding-bottom: 4px;
  margin-right: 5px;
  font-size: 20px;
`;
const FaSearchIcon = styled(FiSearch)`
  padding-bottom: 4px;
  margin-right: 5px;
  font-size: 20px;
`;

const FaUserAltIcon = styled(FiUser)`
  padding-bottom: 4px;
  margin-right: 5px;
  font-size: 230x;
  font-size: 20px;
`;

const HeroButton = styled(Button)`
  background-color: #040f32;
  border-color: #040f32;
  height: 50px;
  width: 150px;
  font-weight: 600;
  border-radius: 10px;
  &:hover{
    background-color: #fdfdfd;
    color: #040f32;
    border-color: #040f32;
  }
`

const Navigation = styled(Navbar)`
    padding-top: .25rem;
    padding-bottom: .25rem;
    background-color: #fdfdfd;
    height: 90px;
    top: 0;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
` 


const Header = () => {
    return(
        <Navigation bg="light" expand="lg">
          <Navigation.Toggle aria-controls="basic-navbar-nav" />
          <Navigation.Collapse id="basic-navbar-nav">
            <Nav className="navbar-right ml-md-auto">
            <Nav.Item className="nav__item" eventkey={1}>
                <Nav.Link  as={Link} to="/">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav__item" eventkey={2}>
                <Nav.Link as={Link} to="/story">Our Story</Nav.Link>
              </Nav.Item>
            <Nav.Item className="nav__item" eventkey={2} href="/expertise">
              <Nav.Link as={Link} to="/expertise">Expertise</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav__item" eventkey={2}>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
              <Nav.Item eventkey={1}>
                <Nav.Link as={Link} to="/search">
                      <FaSearchIcon /> 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item eventkey={2}>
                <Nav.Link as={Link} to="/account">
                      <FaUserAltIcon />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item eventkey={2}>
                <Nav.Link as={Link} to="/cart">
                  <FaShoppingCartIcon />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navigation.Collapse>
        </Navigation>
      )
}

export default Header;