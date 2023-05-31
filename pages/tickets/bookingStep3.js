import React from "react";

import sendDataDB from "../../components/api/SupaBase"
import { useRouter } from "next/router";
import CulculateFunction from "../../components/UI-cards/Calculatefunction";


function bookingStep4(props) {
    const router = useRouter();
    async function confirmBooking() {
    const request = await fetch("https://bittersweet-painted-willow.glitch.me/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.orderInfo.orderID }),
    });
    const response = await request.json();
    const message = response.message;

    const payload = {
      totalTickets: props.orderInfo.totalTickets,
      regTickets: props.orderInfo.regTickets,
      vipTickets: props.orderInfo.vipTickets,
      selectedArea: props.orderInfo.selectedArea,
      tentService: props.orderInfo.tentService,
      greenCamping: props.orderInfo.greenCamping,
      guestInfo: props.orderInfo.guests,
    };

    if (message === "Reservation completed") {
      router.push("/tickets/bookingStep4");
      const response = await sendDataDB(payload);

    }
    if (message === "ID not found") {
      router.push("/tickets/bookingStep4");
    }
  }


  function CancelMethod() {
    router.push("/tickets/bookingStep2");
  }


  return (
    <div>


        <h2>Payment Information</h2>
        <h5>Please Enter Your Credit Card Information.</h5>
        <div className="payment-field">
          <h3>Credit Card Details</h3>
          <form>
            <div>
              <label htmlFor="form-name">
                Name On Card
                <input required type="text" name="name" id="form-name" placeholder="Jonas Vingegaard" />
              </label>
            </div>
            <div>
              <label htmlFor="form-card">
                Card Number
                <input required mask="9999 9999 9999 9999" maskChar={null} placeholder={"1234 1234 1234 1234"} name="cardNo" id="form-cardNo" onBlur={props.verify} />
              </label>

              <label htmlFor="form-expiry">
                Expiry Date
                <input required mask="99/99" maskChar={null} placeholder={"12/34"} name="expiry" id="form-expiry" onBlur={props.verify} />
              </label>

              <label htmlFor="form-cvc">
                CVC Number
                <input required type="text" name="cvc" id="form-cvc" inputMode="numeric" maxLength="3" onBlur={props.verify} placeholder={123} />
              </label>
            </div>
            <div>
              <label htmlFor="form-email">
                Email
                <input required type="email" name="email" id="form-email" onBlur={props.verify} placeholder={"MonkeyDluffy@yahoo.dk"} />
              </label>

              <label htmlFor="form-phone">
                Phone Number
                <input mask="99 99 99 99" maskChar={null} required type="text" name="phone" id="form-phone" placeholder={"01 23 45 67"} />
              </label>
            </div>
            <div>
              <label htmlFor="form-address">
                Billing Address
                <textarea required name="address" id="form-address" placeholder="Guldbergsgade 29N, 2200 København" />
              </label>
            </div>
          </form>
        </div>

      {
        <CulculateFunction orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      }
    

      <div>
        <button  onClick={CancelMethod}>
          Back
        </button>
        <button  onClick={confirmBooking}>
          Confirm Payment 
        </button>
      </div>
    </div>
  );
}

export default bookingStep4;
