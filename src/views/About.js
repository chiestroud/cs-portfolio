/* eslint-disable max-len */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button } from 'reactstrap';
import { motion } from 'framer-motion';

export default function about() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPic, setShowPic] = useState(false);
  const handleClick = () => {
    setShowPic((prevState) => !prevState);
    setIsFlipped(!isFlipped);
  };

  return (
      <motion.section
        initial={{ y: '150vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="aboutMe">
      <header className="about">About Me</header>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="mainContainer">
          <div className="splitMain">
            <p className="introduction">Hello, my name is Chie Stroud.</p>
            <p className="introduction">I was born and raised in Kyoto, Japan. I lived in Japan most of my life until I moved to the US in 2016, and I am currently working for an automotive manufacturer as a part of the quality team. I am also a part time Web Development Bootcamp student at the Nashville Software School.</p>
            <p className="introduction">My desire to study programming started out of the blue when I began having thoughts on how to build a web application. While at work, I had ideas at random on how to make my job and life easier and questioned why so many things are still manually operated. I wondered if software development is a tool I could use or if it was something that was prohibitively difficult or expensive to implement. I started digging into online resources and I ended up getting hooked right away. This is the most interesting subject I have ever studied and I cannot get enough of it.</p>
            <p className="introduction">Software development is an endless journey of learning, problem solving, and creativity. This is why I love it so much.</p>
            <Button id="about" onClick={handleClick}>More Info?</Button>
          </div>
        <div className="splitMain">
          <img className="profileImg" src='https://lh3.googleusercontent.com/18WjMdW7N2oA91C3jHVTBCiTHbwsittantI-gsHPDLqt5WghcIEEDEuJf8zk8jkWUEsSx343HcjW0FZl8WJBtTn3n1T_zp48OtkLm4wP8UM5KsetX0FYA_NbOYCz_8a3SjHKZJLnYTU=w2400' alt='profile picture' />
        </div>
      </div>
      { showPic
          && <div className='mainContainer'>
            <div className="splitMain">
              <img className="profileImg" src='https://lh3.googleusercontent.com/h-mNpLfYwu79wISKWq-zNIK-zDVGBIdXiWYbr6U5HbJf3XU88YDEB1pRJ7mJ8ziOBsaUwDJPooiaLLWl7P865VDvLriDTQc8qlfI5Ti6XfXBoDL2WdB7h5clDDyp5oVIyLU6xc8xUeM=w2400' alt='subaru brz'/>
           </div>
          <div className="splitMain">
            <p className="introduction">Here are some of the things I like to do during my free time.</p>
            <ul className="introduction-back">
              <li><i className="fas fa-car-side mr-2"></i>Easy going interactive activities: computer games, sudoku,  jigsaw puzzles, etc.</li>
              <li><i className="fas fa-car-side mr-2"></i>Watching movies (thriller, action, and horror)</li>
              <li><i className="fas fa-car-side mr-2"></i>Finding new restaurants</li>
              <li><i className="fas fa-car-side mr-2"></i>Driving the most beautiful car in the world. This may be a biased opinion... (see picture)</li>
            </ul>
            <Button id="about" onClick={handleClick}>Go Back</Button>
            </div>
          </div>
        }
      </ReactCardFlip>
    </motion.section>
  );
}
