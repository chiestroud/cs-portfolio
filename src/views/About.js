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
          <img className="profileImg" src='https://lh3.googleusercontent.com/WxO-_jEXceD9H95BrJPjPn_txHLXj1kRDl_WVtK1ZrgYTeP8tDq1kLibchTR9yymAshkHWPLgskpzJrrxBxssBoW4kde1Ghqqt6x-6yk0nlkkmdK1k_Idv-Xi4KNBhm1SkjpJcd4QiTGmh8XZS3xFagcd4cFjd8_3I8ksnKvGgsNQg-gN-ecL8jNwg9iqaYchJ_ZbvlbsAjjkyKB-H4NyJPOkDCDeTTrviGVk0t9x_Dx9LsybBGnBdojezXFGM8PW1r1vLyQHanIfryWEOtzFiFfp9jlCMNm28M6_4qCOkTHi_UBoP7aSEXOgfRPfga20DHx4IGEmArbp5xwzFgNnLulSj7oUuNz46xLu-u5Orcd8TfTly4uG7ksZfTTDkCby4soegXrOpQK4nGMUi6lCMMkxKQBYz_gnGaQUQlpDbYyIgaEXG3kmQNOs1LHNYHJ5j4ZYKw8806sbp-3l4NY7O_cdYnNnGvz2eIz5DLaMI6Wg_V7zLEH0F05DvCKAKVhw5kzNq4tM9Sw_dwnxn_opKaaoiF90gfgatPo2ylt9zkNawkM1oE8wg4xlTscmX2zreoddPr5SdsimUgXF86HQwoe5S4AY5IWnMoeQHMaNviXcH8W57YiMRZSSNU1GGiWY8PtOTsXVntRbyO5JisCvy3eNKAHf0ovLB0KdjbMCy-CixcLn93ovMptz-0C_OsVnXs2Rc0N3RKko4u6qh59K5vw=w1059-h794-no?authuser=0' />
        </div>
      </div>
      { showPic
          && <div className='mainContainer'>
            <div className="splitMain">
              <img className="profileImg" src='https://lh3.googleusercontent.com/47BVcTtzDGv3oT8r6Oad4aMHqL6gw4bHQHN5Y_1W3t2Je7M5B-cdkENW_T1_YuwKy4zUjJqHvb66eRSgxpAejaVu3Qa_SAVJpEved2WuB6mkEvtNp6SdPm8CzrzZzrYIKYw1-xdu4kEI1pWjQjAknItjxPrsGHbgraqvv03PV3yfmeJPAckrDe14-7D91foTkoJXLLGEVsvzrSaR9MPOrc8imz-w8fSMMXeO4V7uifPG-d-0u45mmmp7zXsLMuWix86eqcoCsOa0tigLAa1voS6QNwVkFyzf_EzzVaSd0tBPasQhIuS1KvKWC7hQRuRGEvoCEe7_JAjsUj5AyI4WQ41tabMvEJR3Q8qLqajAqSrGWCjJHopa5IuLVorJbOR4mXEjym0Qf1PUei5v6TWxV2V5QVbw1Dk_Mv6HskVx36Ez1aCDN0P9yQ-ByhlSPn0Nlmi6KteocSsC_RtIW24qfARNjxL_hQKIixMUGYsDiD-QzqWXOCVrllb0JjIfNqeSoO0d3LeYG-9Uc2woTTwl-x1dZHWHP1LvYOM2yVO2Gc57FWDa2hQNqQKgARjbvu_o72guWUnvkhNQ23t6wQ8TgoHB78fsTWDuOLMbstcXBWx57HwscIVwplu8C4KMRn1HXcKkxXuMVGRROcho6JGHs1A6Oc1Sav8vH5UWk2Tc3xyR-oZVgF3tPZraf84reK5yuueyuW_Hr9UlyX3aZHQ2MAXu=w1059-h795-no?authuser=0' />
           </div>
          <div className="splitMain">
            <p className="introduction">Some of the things I like to do during my free time.</p>
            <ul className="introduction-back">
              <li>Play games (computer, board, and card games)</li>
              <li>Watch movies</li>
              <li>Find new restaurants</li>
              <li>Drive my beautiful car in the picture left</li>
            </ul>
            <Button id="aboutBtn" onClick={handleClick}>Flip Me</Button>
            </div>
          </div>
        }
      </ReactCardFlip>
    </section>
  );
}
