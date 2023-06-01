import React from "react";
import { useRouter } from "next/router";
import CulculateFunction from "../../components/UI-cards/calculatefunction";
import TentSetUp from "../../components/UI-cards/TentSetUp";
import NavBar from "../../components/nav-bar/NavBar";

function BookingStep2(props) {
  const router = useRouter();

  const orderInfo = props.orderInfo; // Define orderInfo
  let tentPrice = 249;
  let setUpPrice;
  let tentSize = "";

  if (orderInfo.totalTickets <= 2) {
    setUpPrice = 299;
    tentSize = "2-person tent";
  } else if (orderInfo.totalTickets === 3) {
    setUpPrice = 399;
    tentSize = "3-person tent";
  } else if (orderInfo.totalTickets === 4) {
    setUpPrice = 598;
    tentSize = "2 x 2-person tents";
  } else if (orderInfo.totalTickets === 5) {
    setUpPrice = 798;
    tentSize = "1 x 2 person tent & 1 x 3 person tent";
  } else {
    setUpPrice = 299;
    tentSize = "2-person tent";
  }

  function nextStep() {
    router.push("/tickets/bookingStep3");
  }

  function CancelBook() {
    router.push("/tickets");
  }

  return (
    <div>
      <NavBar />
      <section>
        <h2>Please Select Your Tent options</h2>

        <TentSetUp
          tentSetUp={props.tentSetUp}
          title={"The Staff Can Set The Tent For You"}
          name={"TentSetup"}
          subtitle={tentSize} // Use tentSize variable
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

      <CulculateFunction
        orderInfo={props.orderInfo}
        setOrderInfo={props.setOrderInfo}
        tentPrice={tentPrice} // Use tentPrice variable
        setUpPrice={setUpPrice} // Use setUpPrice variable
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
