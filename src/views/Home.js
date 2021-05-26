import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <section className="aboutMe home">
      <header className="title"><Typist>Chie Stroud</Typist><Typist.Delay ms={500} /></header>
      <h1 className="jobTitle">Full Stack Web Developer</h1>
      <div className="btnContainer">
        <Button tag={Link} to='./about' id='btn'>About Me</Button>
        <Button tag={Link} to='./contact' id='btn'>Contact</Button>
      </div>
    </section>
  );
}
