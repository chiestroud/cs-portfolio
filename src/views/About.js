/* eslint-disable max-len */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button } from 'reactstrap';

export default function about() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPic, setShowPic] = useState(false);
  const handleClick = () => {
    setShowPic((prevState) => !prevState);
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="aboutMe">
      <header className="title about">About Me</header>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="mainContainer">
          <div className="splitMain">
            <p className="introduction">I was born and raised in Kyoto, Japan. Moved to the US in 2016, and currently working at Toyo Automotive Parts as a part of the quality team. I am also a part time Web Development Bootcamp student at Nashville Software School. It started with my out - of - nowhere thoughts of building a web application. This is the most interesting thing I have ever learned in my life and I just cannot get enough of it. Software development is an endless journey of learning, problem solving, and being creative. I love it so much.</p>
            <Button id="aboutBtn" onClick={handleClick}>More Info?</Button>
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
            <p className="introduction">Some of the things I like to do during my free time.</p>
            <ul className="introduction-back">
              <li><i className="fas fa-car-side"></i> Computer games, board games, sudoku, and jigsaw puzzles</li>
              <li><i className="fas fa-car-side"></i> Watch movies</li>
              <li><i className="fas fa-car-side"></i> Find new restaurants</li>
              <li><i className="fas fa-car-side"></i> Drive my beautiful car (see picture)</li>
            </ul>
            <Button id="aboutBtn" onClick={handleClick}>Go Back</Button>
            </div>
          </div>
        }
      </ReactCardFlip>
    </section>
  );
}
