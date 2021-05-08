import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <section className='container'>
      <header>Chie Stroud</header>
      <hr />
      <h6>Full Stack Web Developer</h6>
      <Button tag={Link} to='./about' color='info' className='text-white'>About Me</Button>
      <Button tag={Link} to='./contact' color='info' className='text-white'>Contact</Button>
    </section>
  );
}
