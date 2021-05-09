import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navContainer">
      <Navbar expand="md">
        <Link className='navbar-brand' to="/">Chie Stroud</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className='nav-link' to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/nss">NSS Journey</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/technologies">Technologies</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/contact">Contact</Link>
            </NavItem>
          </Nav>
          <NavbarText>
          {user && <p className='mr-3'>Welcome {user.fullName}</p>}
          </NavbarText>
          <NavbarText>
            {user
              ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
              : <Button color='info' onClick={signInUser}>Sign In</Button>
            }
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
