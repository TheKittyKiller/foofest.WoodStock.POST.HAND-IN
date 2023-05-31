
import React from "react";
import { useRouter } from "next/router";
import CulculateFunction from "../../components/UI-cards/calculatefunction";
import TentSetUp from "../../components/UI-cards/TentSetUp";



function bookingStep2(props) {

  const router = useRouter();


  function nextStep() {
    router.push("/tickets/bookingStep3");
  }


  function CancelBook() {
    router.push("/tickets");
  }

  return (
    <div>
      <section >

        <h2>Please Select Your Tent options</h2>
    

        <TentSetUp tentSetUp={props.tentSetUp} title={"The Staff Can Set The Tent For You"} name={"TentSetup"} subtitle={props.tentSize} description={"Price Includes The Tents"} price={`${props.setUpPrice}',-`} />

        <TentSetUp tentGreen={props.tentGreen} title={"Green Camping"} name={"TentGreen"}  description={"Environnement Friendly Tents"} price={`${props.tentPrice},-`} />

        <p className="bookingfee">
           A mandatory booking fee of 99,- Only paid once, even if multiple tickets are bought
        </p>
      </section>
      {
        <CulculateFunction orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      
      }
      <div className="booking-steps-buttons">
        <button className="secondary" onClick={CancelBook}>
          Back
        </button>
        <button className="primary" onClick={nextStep}>
          Continue to details 
        </button>
      </div>
    </div>
  );
}

export default bookingStep2;
