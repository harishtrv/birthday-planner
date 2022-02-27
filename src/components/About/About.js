import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    let script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    document.getElementById('about').appendChild(script);
  }, []);
  return (<div id='about' style={{ padding: '15px', backgroundColor: 'beige' }}>
    <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/harish-t-75bb2514a?trk=profile-badge">
      <h4>Hello, I am Harish,</h4>
      <p>
        I am very much interested in javascript and Reactjs projects. I am open to new oppurtunities. if you want to collaborate with me lets connect on linkedin.
      </p>
    </a>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light"
        data-type="VERTICAL" data-vanity="harish-t-75bb2514a" data-version="v1">
      </div>
    </div>
  </div>);
};

export default About;