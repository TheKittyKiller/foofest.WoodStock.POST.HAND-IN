import React from 'react';

const HomePage = () => {
  return (

    <div> 
    <div className="grid-container">
      <div className="logo">
        <img src="/1.jpeg" alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="navbar">
        <ul>
          <li>
            HOME
          </li>
          <li>
            VIP
          </li>
          <li>
            NEWS
          </li>
          <li>
            INFO
          </li>
        </ul>
      </div>
       </div>
      <div className="content">
        <h2>Hello</h2>
        <p className="text-white text-left mt-2">
          We've got a few options for bookings, so why not let us help you find the right one for you. <br />
          Start the process below; we promise it's not a horrible experience.
        </p>
        <button>
          Find Ticket
        </button>

        <div className="info-section">
          <h2 className="info-title">Who are we</h2>
          <p className="info-text">
            Get ready to experience the ultimate music festival extravaganza with Foo Festival - where world-class artists, delicious food, and unforgettable moments come together in one epic weekend!
          </p>

             
            

          <h2 className="event-page-title">VISIT OUR EVENT PAGE FOR BRAND INFO SCHEDULE ETC</h2>

          <button className="event-page-button">Take me there</button>
          
<br></br><br></br>
          <button className="find-ticket-button">Find Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
