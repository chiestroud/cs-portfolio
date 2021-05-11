/* eslint-disable max-len */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function NssJourney() {
  return (
    <section>
      <div className="head">
        <header className="title">My Learning Journey in NSS</header>
        <p>I started Web Developer Bootcamp in Nashville Software School in January 2021. Apart from my projects built during class, I built my journal site every month to implement what I have learned in class as well as to see my improvement each month. At the beginning of each month, I spent a couple of hours building journal page using all the possible knowledge I have at that level.</p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#a1957d' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date="Jan 2021 ~ Jan 2022"
          iconStyle={{
            background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          icon={<i id="school" className="fas fa-school"></i>}
        >
        <h3 className="vertical-timeline-element-title">Started NSS</h3>
        <h4 className="vertical-timeline-element-subtitle">January 2021</h4>
        <p>
          My learning of web development started here.
        </p>
      </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#a1957d' }}
          date="Jan 2021"
          iconStyle={{
            background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          icon={<i id="school" className="fas fa-school"></i>}
        >
          <h3 className="vertical-timeline-element-title">Jan 2021</h3>
          <a href="https://cs-nss-journal.netlify.app/january.html" target="_blank" rel="noreferrer" ><img className="journalImg" src="https://lh3.googleusercontent.com/vXyuaIVxoDHrJdDQXVaZrqlmf4LRJGEnxzwBg7JPu2MG3XeQVvewYk9Bps8L3RtfMcGPGKEvrvGY8Xs29NLWf5yzu7MqOzbBxC7VkquBirg6kS9wiOJ_83jgKkHJDjrCdQIYDszyn5kt9nuinlHDQpxgV450fZt8j0RRmlMfzaUwGbU3bUxR-lehCCda-O2JETm5BAxDLZUovnGXEhwEgQ8UmZnid6bfRtc8otWv6KtVwJ48cdn2BPnCbi9BqbV2VqwcmVUaot4Vxtj32k1QQFy30z1YI64q8_tnOrjerK1-W9eRUNzUGRVSkSqr8yWesE6PY9Yox9XG6jaTOjWvV0LGr2BT5TiS0dakDQ60fGAFCFYarH41ien5cfQAukoujd6AfkXqHAIF3pIf1Yxdy7RuB1Aw_DaYEM3VfNl5u4bqWC7mna4tr_0f4Gy9fvTBJVOUxINoxwIB4xlILW1OsDTExFjoUb1mYsAPmA_EgPo02_S0OUx4s0TLjy7Frv8RkbmZccUVpMZ_E2kTP2DF6-T13mt7BlKGK3OGubjzddrZ9KMU0SqB1Kdc4hYzauf4ROfDnkvRkxeo-lvv2PiFMDP7kXXNtNCZI0SpgqeYr7IGwGsGRseVEDGJVrAyDXrLQbzWHdjZkjr7zlS-ldJiX2hqlQXSWVJ9GoQikeuTMbRXIS5Nqwtm--fJX7k-iccdvDftvRUMlW7lrUUtEBK6JCkkCg=w1523-h694-no?authuser=0" /></a>
          <p>All of journal in January were statically typed in html file. Event listener was added to change background color with button click, hover and keypress.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fff', color: '#a1957d' }}
        date="Feb 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <h3 className="vertical-timeline-element-title">Feb 2021</h3>
        <a href="https://cs-nss-journal.netlify.app/february.html" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/W1UJb-ekpY7Kqg8dTeXmE7w1NR66B7TeW4WZyNGEh5itL9zYOYsE38ZKIocvUTduDSZqvepMhjwi2io71F4EzRUHbk5_Xoi_8tnvRTlragCf9BG8EWRKYMOcR3i9OR_HqaJHxyjuob24au_BY-bbweCwzLPWxb4T-YGewyYvM1LOo5dGOjZQ0Wg6libdl38_ceCGMHGKQzT3E5bM0PMArYbeGsYqvikAqAtktGMm4Ar-xWFW4bSzQ20_1r9WFUSu4zOojfu2B6fTBTge8VRC6tDghRCvK6_hZh8sejIdTknL3gGUPtgqiYp4K8gs6xSDHFPidhBM4k2JJW7wQYb_jY7K4i2UH9s5nUqiBkDlYSHEnVhEpjXAhvMOSywBVigGUbszpinwdDCYA2jCJHkvM5C9RPs37xniYUCMiRGIpibp56aSCX8my7Gt1d44Z_xj0UlXorhAbwJnhAV8jrw-XvThXhcE4DNbA_eWJK_oMGNUH7ne7-7-CYD8xWHtpRCEs42AOs8UptWUU0usFP4S6Q96ub2GUNhdB1BfxH1JGPHksMh1TDX1FPxyWnJqFvncneAm11cKf5nJ6Qlf43BfU9dytu2957yKPwkrrhk-RqsfujkA8bBs8eNBmIGnv0V0ewQ-rKPkZ09r6hsPTRDK438TPx7mwAY6q_sMfF_1gwhIiEF60Yn8tUJJ3IaCxs952Vyt9lAMj1AVqcQIIy0d11j1Ow=w1523-h664-no?authuser=0"/></a>
        <p>Delete function was implemented for February Jounral. Of course you can delete article on the page, but the journal comes back after you reload as all of the journals are still statically typed in html</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fff', color: '#a1957d' }}
        date="Mar 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <h3 className="vertical-timeline-element-title">Mar 2021</h3>
        <a href="https://cs-journal-nss.netlify.app/#" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/zdbXn10-WgkH6yMzDadUoeDp3hlYLDxRXMKW8Ipzjmx92VrzBLQGlh-i6fNwQc9xn6YcG_Q_OShj_N8uXa1YO_u_0pWaaWGA6iDpRMDD0YIiz5HkyXiTOh890Gl3qhI3Y8swd-4HqoON13eoiiI70bQtPJjicAi4PANdD9xQXdbIZTAOLLGw1dGSsC7_A4KXUB0xJRCXOzXfyb8c-a7sm90YF7L_EKtglOXCAKqPq_OthkqwIR-Y6IN0t3v609oxqYFlLnIVcXRSjSx2co5MXEBlKWoYjPk0G0aAmEcraliq2n4jopJXEKxs72Xjrre7cEVUuS6_O9DcHZqjbPniSxNMscILgz6T9SANKJoUONkBvWKlfFbGwPgVkNnyXsBekmoLqwI6cwbU166h3-FTyfhTc4mXeecz_GjLcgfFWhliutVQ2jnpFlMgJzKQxLEYymp0iYbjlNFUKi5zyg1ijhXzfKKgKEFCinXsebb2TQFYdO1_dCsurf_lR_fh169F-GAwxmkzXAOYBExfPQC6jXM0vmYj0q9ag5S1uqTyr1DJe9b0ta5owI9BpsxNXmhjmB1Gt6OwQjCKwh22tdv0F2DxaPWZQW4tpFzh3v--rJunia9QVETI3Xoeain2mCY0haRId2RVDFFsEFW8u9ZkhkfzOOuvRmcyR_GlgLqQf1BEXtFAVXn3f2tPPQv9wSij5MzLaBwHcCSTH3M_E1qhM3eq3Q=w463-h179-no?authuser=0"/></a>
        <p>In March, json file was used to type all the journal and the file was uploaded to firebase. All the journal data displayed on the page is gotten from firebase database using get request</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#fff', color: '#a1957d' }}
        date="Apr 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <h3 className="vertical-timeline-element-title">Apr 2021</h3>
        <a href="https://cs-journal-nss.netlify.app/#" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/fLskfpPbfa_RNj1yFvu6oi93g1h6qU7OGKALN3tHa-iV18S4HwlnAer_xRkK8aZcRwLApP4JdrRoKPq4h240zAQ8YDn8eJiwc8_pwObtg3z1MMeJ4Q-IgEz9fyoQnGfithKN4GEoQz93ROiU2lUn7Uz7d7lpj87EmhstbdtPTPPvfMRrsDXgzQRAOsAvHIqpj6-BrV7LsvbMxVgkHhS6aXlAB1Fg_YMqy3ferLa2RPnPTcGhDWdcS0ZvUHixCCcdTq2JeRJ6qEVlOrrdkmrNlz6sxhtuvMfyIgVxbfwZBY3qMhhDbhFT7lf5LQH0DFyugUzxq1UTkpaO75K6n0KY8P1AYbPOtpPVVm0YgXvAJpZ2eX3vGy1WW0-ynq7Kc6uviJdQEq3erWNWT-CDKpK_6sYLGRotexu6_ZZu82lXoE-X2PmIQgtk_WDhgo-1tr9djhOuj3edz1NqEjhKal4cqZEUJlYSDqoo2vNv1-tqzk1bR7-Doe921Uje2cpS2q37Cv2F9Ta3dSG19QT_E_z008gpogg1KVJM4bO8sQwLMYRj4rZCtwJxeCEd4vj8gjbiwEXCJULX8SSW6GNja0uWbvqPEZHLwJuTmRJ4grIIunIvZu9X6NgxyOUyJEUovMx-ngL7QBmRGdO_WOy6nyFG6TJB9fvvLe4kTmlqojQz8pMSfWbeIQ-Nj-VTaNiuXsH4y4hERDRSSAn4rjvdVCkNtRTbxQ=w500-h195-no?authuser=0"/></a>
        <p>In April, firebase authentication was added for user to signin. Also I can create journal on the website and displays on the DOM. Edit function was added too so that I can modify my journal on the page.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#fff', color: '#a1957d' }}
        date="May 2021"
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      >
        <h3 className="vertical-timeline-element-title">May 2021</h3>
        <a href="https://cs-nss-journal-react.netlify.app/may" target="_blank" rel="noreferrer"><img className="journalImg" src="https://lh3.googleusercontent.com/vyyk0mrbffRotweGQM4Y1X3UF3W0gBVrbVTSB7_cLqrMpdqiVMLsvu6_ZyWA0CLV63Ez7fhZK4ydnAlQUWsaMft1kobda4yGATaK9gDAfmOc_bB7W7HOiBs9HHb5H2YihP9buHpAaacBIxMW_ZGgBPn_iPQaKw_ui7Jl_UQLHql0MPAN2XeCP-N6Ute1mtw91vNZn9EqCGRyjPnxtXiAHtd5b_IHIkLnVLZvmmnw9WLQPMR_s-SLHEHqiQUlX8r3GPN0Id4SfwV-phs8p--i6yjgtVZJQPYvJ8RB6xDpj7ALg0ZG4Q2kjHkhNesJ8xbs3zFFwqaIt2to-Npt4NcrGcNwiWUSFDyFqBSpMaTbYvzTWPqCyCPSxk9x554Yo--8X5PKHqYOaK_lNAZnISw7eZ9efdmHkqrlxuHsXq474e4KQNCJDrHXdx168s-8Jvu1v5Q-lJHTnDcg43XI26x_k_mTpCX4hkrLNRB95Tii3zBtOX8-jwpZom2gnjWrNjoxIhwUqvEB3WIUs2zp5S25Rl7kc3xuQ6WBgvCJWZhOaNHbDxBqNQq12iG17cEV1TaWA4L83AtvdKvmkM_gFh6CZallM868VSTAkha8QiyyH2BtVViC4QQ1l3R1Z84UIuY-4nsqdmjE176a6xue0lHWfqsR6Cqgtm5yqXfvXWxVzD3wzkyiNTfcoHXdMmx2OTP7RL4lbjF4Rrzmbfd48Rc6NXn9kw=w1523-h471-no?authuser=0"/></a>
        <p>Full CRUD jounral website was made using React. Also anyone can sign in with Google, but I am the only one who can edit/delete journal.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#fff', color: '#a1957d' }}
        iconStyle={{
          background: '#aca18c', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        icon={<i id="school" className="fas fa-school"></i>}
      />
      </VerticalTimeline>
    </section>
  );
}
