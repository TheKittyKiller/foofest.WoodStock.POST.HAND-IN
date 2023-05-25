import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li className="underline">HOME</li>
          <li className="underline">VIP</li>
          <li className="underline">NEWS</li>
          <li className="underline">INFO</li>
        </ul>
      </div>
      <div className="content">
        <div className="logo">
          <img src="/1.jpeg" alt="Logo" />
        </div>
        <div className="text">
          <h3>Hello</h3>
          <p>
            We've got a few options for bookings so why not let us help you find the right one for you.
            Start the process below, we promise it's not a horrible experience.
          </p>
          <button className="find-ticket-button">Find Ticket</button>
        </div>
      </div>
      <div className="info-section">
        <h2 className="info-title">Who are we</h2>
        <p className="info-text">
          Get ready to experience the ultimate music festival extravaganza with Foo Festival - where world-class artists, delicious food, and unforgettable moments come together in one epic weekend!
        </p>
        <h3 className="event-page-title">VISIT OUR EVENT PAGE FOR BRAND INFO SCHEDULE ETC</h3>
        <button className="event-page-button">Take me there</button>
        <button className="find-ticket-button">Find Ticket</button>
      </div>
    </div>
  );
};

export default HomePage;
