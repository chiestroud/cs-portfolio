import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import HomeStyle from '../styles/HomeStyle';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <HomeStyle>
      <section className="aboutMe home">
        <header className="title"><Typist>Chie Stroud</Typist><Typist.Delay ms={500} /></header>
        <h1 className="jobTitle">Full Stack Web Developer</h1>
        <div className="btnContainer">
          <Button tag={Link} to='./about' id='btn'>About Me</Button>
          <Button tag={Link} to='./contact' id='btn'>Contact</Button>
        </div>
      </section>
      <Footer />
    </HomeStyle>
  );
}
