import React from "react";
import { useRouter } from "next/router";
import CalculateFunction from "../../components/UI-cards/CalculateFunction";
import TentSetUp from "../../components/UI-cards/TentSetUp";
import NavBar from "../../components/nav-bar/NavBar";

function BookingStep2(props) {
  const router = useRouter();

  const orderInfo = props.orderInfo; // Define orderInfo
  let tentPrice = 249;
  let setUpPrice;


  if (orderInfo.totalTickets <= 2) {
    setUpPrice = 299;

  } else if (orderInfo.totalTickets === 3) {
    setUpPrice = 399;

  } else if (orderInfo.totalTickets === 4) {
    setUpPrice = 598;

  } else if (orderInfo.totalTickets === 5) {
    setUpPrice = 798;

  } else if (orderInfo.totalTickets === 6) {
    setUpPrice = 1198;

  } else if (orderInfo.totalTickets === 7) {
    setUpPrice = 1398;

  } else if (orderInfo.totalTickets === 8) {
    setUpPrice = 1498;

  } else if (orderInfo.totalTickets === 9) {
    setUpPrice = 1698;



  } else {
    setUpPrice =1898;

  }
  function nextStep() {
    router.push("/tickets/bookingStep3");
  }

  function CancelBook() {
    router.push("/tickets");
  }

  return (
    <div>
    <NavBar/>
      <section>
        <h2>Please Select Your Tent options</h2>

        <TentSetUp
          tentSetUp={props.tentSetUp}
          title={"The Staff Can Set The Tent For You"}
          name={"TentSetup"}

          description={"Price Includes The Tents"}
          price={`${setUpPrice},-`} // Use setUpPrice variable
        />

        <TentSetUp
          tentGreen={props.tentGreen}
          title={"Green Camping"}
          name={"TentGreen"}
          description={"Environment Friendly Tents"}
          price={`${tentPrice},-`} // Use tentPrice variable
        />

        <p className="bookingfee">
          A mandatory booking fee of 99,- Only paid once, even if multiple tickets are bought
        </p>
      </section>

      <CalculateFunction
        orderInfo={props.orderInfo}
        tentPrice={tentPrice}
        setUpPrice={setUpPrice}
        title={props.title}
        description={props.description}
        price={props.price}
        tentSetUp={props.tentSetUp}
        tentGreen={props.tentGreen}
      />

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

export default BookingStep2;
