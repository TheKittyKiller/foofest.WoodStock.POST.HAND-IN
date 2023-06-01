import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import CalculateFunction from "../../components/UI-cards/CalculateFunction";
import NavBar from "../../components/nav-bar/NavBar";

function Step3(props) {
  const router = useRouter();
  const theForm = useRef(null);
  const [showInputs, setShowInputs] = useState(true);
  const ticketHolders = [];
  const guestsArray = [...Array(props.orderInfo.totalTickets)];

  async function submit(e) {
    e.preventDefault();
    if (props.orderInfo.totalTickets === 1) {
      const guest = {
        first: theForm.current.elements.firstName.value,
        last: theForm.current.elements.lastName.value,
        telephone: theForm.current.elements.telephone.value,
        birthDate: theForm.current.elements.birthDate.value,
      };
      ticketHolders.push(guest);
      await props.setOrderInfo({ ...props.orderInfo, guests: ticketHolders });
    } else {
      for (let i = 0; i < props.orderInfo.totalTickets; i++) {
        const guest = {
          first: theForm.current.elements[`firstName[${i}]`].value,
          last: theForm.current.elements[`lastName[${i}]`].value,
          telephone: theForm.current.elements[`telephone[${i}]`].value,
          birthDate: theForm.current.elements[`birthDate[${i}]`].value,
        };
        ticketHolders.push(guest);
      }
      await props.setOrderInfo({ ...props.orderInfo, guests: ticketHolders });
    }
  
    router.push("/tickets/bookingStep3");
  }

  // BUTTONS - go back to previous page
  function goBack() {
    router.push("/tickets/bookingStep2");
  }

  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="order-container">
        <section className="order-interface">
          <h2>Personal information</h2>
          <h5>We need some details about each person for the tickets.</h5>
          {guestsArray.map((_, i) => (
            <div key={i}>
              <h3 className="white">Ticket {i + 1}</h3>
              <div className="dropdown">
                <h3>Regular ticket</h3>
                <h4 className="dropdown-arrow">‹</h4>
              </div>
              <div className="accordion-field">
                <label>
                  First name
                  <input
                    title="Must be a valid First name"
                    required
                    pattern="[A-Za-z]{1,50}"
                    aria-required="true"
                    type="text"
                    name={`firstName[${i}]`}
                    placeholder="John"
                  />
                </label>
                <label>
                  Last name
                  <input
                    title="Must be a valid Last name"
                    required
                    pattern="[A-Za-z]{1,40}"
                    aria-required="true"
                    type="text"
                    name={`lastName[${i}]`}
                    placeholder="Applebaum"
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    title="Must be a valid phone number"
                    required
                    pattern="[0-9+]{8,18}"
                    aria-required="true"
                    type="text"
                    name={`telephone[${i}]`}
                    placeholder="+45 12345678"
                  />
                </label>
                <label>
                  Date of Birth
                  <input
                    title="Must be a valid Date of birth"
                    required
                    pattern="[0-9]"
                    aria-required="true"
                    type="date"
                    name={`birthDate[${i}]`}
                  />
                </label>
              </div>
            </div>
          ))}
        </section>
        <CalculateFunction
          orderInfo={props.orderInfo}
          setOrderInfo={props.setOrderInfo}
          tentPrice={props.tentPrice}
          setUpPrice={props.setUpPrice}
        />
        <div className="booking-steps-buttons">
          <button className="secondary" onClick={goBack}>
            Back
          </button>
          {showInputs ? (
            <button type="submit" className="primary">
              Continue to payment →
            </button>
          ) : (
            <button type="button" className="primary" onClick={() => setShowInputs(true)}>
              Enter Personal Info
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default Step3;
