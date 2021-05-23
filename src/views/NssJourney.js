/* eslint-disable max-len */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function NssJourney() {
  return (
    <section>
      <div className="head">
        <header className="title" id="tech">My Learning Journey in NSS</header>
        <p className="nssJourneyContent">I became fascinated with learning web development and decided to join the Web Developer Bootcamp offered by the Nashville Software School in January 2021. I wanted to keep track of my progress during the course of study. I spent a couple of hours at the beginning of each month to build a journal site to log my daily school activity. Click the monthly journals below to go to the desired site.</p>
      </div>
      <VerticalTimeline className='vertical-timeline vertical-timeline-custom-line'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#dcdcdc', color: '#5b5b5b' }}
          contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
          date="Jan 2021 ~ Jan 2022"
          dateClassName="dateClass"
          iconStyle={{
            background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          icon={<i id="school" className="fas fa-school"></i>}
        >
        <div className="vertical-container">
          <h3 className="vertical-timeline-element-title">Started NSS</h3>
          <h4 className="vertical-timeline-element-subtitle">January 2021</h4>
          <p>My web development journey started here.</p>
        </div>
      </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#dcdcdc', color: '#5b5b5b' }}
          contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
          date="Jan 2021"
          iconStyle={{
            background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          icon={<i id="school" className="fas fa-school"></i>}
        >
          <div className="vertical-container">
            <h3 className="vertical-timeline-element-title">January 2021</h3>
            <a href="https://cs-nss-journal.netlify.app/january.html" target="_blank" rel="noreferrer" ><img className="journalImg" src="https://lh3.googleusercontent.com/YTrz51MIfDjrlnlisw8VFuUwuH9rwQa_XQlBigEC5xOj5swndjqxHwG9oI-bIomNLNIbrsWJ8QCMYcOTb7c4bHaigH0yspCldV7l4WPp8D0hUhU2ZLq0pelpMumtK2CVNzVD_HocWyE=w2400" /></a>
            <p>January journal page is all statically typed in html. Event listener was added to change background color with button click, hover and keypress.</p>
          </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#dcdcdc', color: '#5b5b5b' }}
        contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
        date="Feb 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
      <div className="vertical-container">
        <h3 className="vertical-timeline-element-title">February 2021</h3>
        <a href="https://cs-nss-journal.netlify.app/february.html" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/jhp3LUJ77quzgaf03ko5EMewB4vDUE7gnLz3jZV-u2ZtHO8b1l8KvoG2T9lfy25zSUXfg9k-j8YrkUV0S9O528nATIO6mWGIFKJ2uGV_M4g4XUyqTPWMjQJcPmNwcDSlwaYw4QZI1TE=w2400"/></a>
        <p>DELETE function was implemented for February Journal. No database is connected so the deleted journal reappears when the page is refreshed. All of the journal is still statically typed in html</p>
      </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#dcdcdc', color: '#5b5b5b' }}
        contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
        date="Mar 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <div className="vertical-container">
          <h3 className="vertical-timeline-element-title">March 2021</h3>
          <a href="https://cs-journal-nss.netlify.app/#" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/YTrz51MIfDjrlnlisw8VFuUwuH9rwQa_XQlBigEC5xOj5swndjqxHwG9oI-bIomNLNIbrsWJ8QCMYcOTb7c4bHaigH0yspCldV7l4WPp8D0hUhU2ZLq0pelpMumtK2CVNzVD_HocWyE=w2400"/></a>
          <p>In March, I typed all my journal in json file and uploaded the file to Firebase. All the journal data displayed on the page is fetched from Firebase&apos;s database</p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#dcdcdc', color: '#5b5b5b' }}
        contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
        date="Apr 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <div className="vertical-container">
          <h3 className="vertical-timeline-element-title">April 2021</h3>
          <a href="https://cs-journal-nss.netlify.app/#" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/hLtNBZX2PL4S5-Lyn4uNXK0B_sWWCXs_AclJ-NghORJOa8yT9lcC59Bkm9QMMegH-gqwVEZQtuWeHhglB9G0-IL-4VxlvH_SSrIPriDDisoKdIVkj-GHEMYJqjAoCK3sTpXgqDmUeOg=w2400"/></a>
          <p>In April, Firebase authentication was added for user to signin. Also CREATE function was added to add journal on the website and immediately displays on the page. EDIT function was also added to modify my journal.</p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#dcdcdc', color: '#5b5b5b' }}
        contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
        date="May 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <div className="vertical-container">
          <h3 className="vertical-timeline-element-title">May 2021</h3>
          <a href="https://cs-nss-journal-react.netlify.app/" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/EpEws1ze76PhJLJzCoM186A9uP7kYaz74xCLBGwUu9uxuIIldmZ6tQ7jdyPRxFKKdbFur1ZYCplYy3eGxr-598d9G__KZIWMrY1b2HXQl5PcmkNs_e4wT871-ftfj4OfbHe8kwXAuYM=w2400"/></a>
          <p>Full CRUD journal website was made using React. Also anyone can sign in with Google, but I am the only one who can edit/delete journal.</p>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#dcdcdc', color: '5b5b5b' }}
        contentArrowStyle={{ borderRight: '7px solid  #dcdcdc' }}
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      />
      </VerticalTimeline>
    </section>
  );
}
