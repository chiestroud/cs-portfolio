/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.main
      initial={{ y: '300vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="contactSplit">
      <section className="contactContainer">
        <div className="head">
          <header className="title">Contact Info</header>
        </div>
        <div className="contactInfo">
          <p className="icon"><a href="mailto: urirunrunkoko@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope"></i></a></p>
          <p className="icon"><a href="https://www.linkedin.com/in/chie-stroud/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></p>
          <p className="icon"><a href="https://github.com/chiestroud" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></p>
        </div>
      </section>
      <div className="picture">
        <img className="contactImg img1" src="https://lh3.googleusercontent.com/O1JD24y5Wf8cc9JUZa2c_ZPhGJGddAWuO7WVgOqHkpgA54Qy9xsnbh5_fVt8oJs1Fdt5U5pXPt6MznR9ENGd3WhYlRO22NOyqZQZQfDa5H6aa7UqylQJVV6Zqi353MuT3axcKiVbKoU=w2400" alt="kyoto" />
        <img className="contactImg img2" src="https://lh3.googleusercontent.com/DhQdaeiBajvefX0IaSzvpHgiFJhTQ75_UGme0vnUHpsaT4Cn8acVnI2PD-xxTHRMJ5LIX1iJNCBBaJ-2YsDHwYXRwDdOB2eHQ-DqijYQ-CEmx-guxWfdxXTjvoxu0Mb7nTK0Wuk8POc=w2400" alt="kyoto" />
      </div>
    </motion.main>
  );
}
