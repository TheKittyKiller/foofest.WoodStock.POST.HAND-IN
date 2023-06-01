import React from "react";
import NavBar from "../../components/nav-bar/NavBar";

import { Fireworks } from '@fireworks-js/react'



function ConfiormBooking() {
  return (

      <div >
      <NavBar/>
      <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000'
      }}
    />
        <h2>Thank you for your purchase</h2>
        <p>You will receive your tickets via email.</p>
   

    </div>
  );
}

export default ConfiormBooking;


