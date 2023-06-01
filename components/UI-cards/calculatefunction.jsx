import React from "react";

function CalculateFunction(props) {
  const { orderInfo } = props;

  const totalVIP = 1299 * orderInfo.vipTickets;
  const totalReg = 799 * orderInfo.regularTickets;
  const grandTotal = totalVIP + totalReg + 99;

  let tentPrice = 249;
  let setUpPrice;
  let tentSize = "";

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
  return (
    <div>
      <h3>Your order</h3>

      {orderInfo.vipTickets > 0 && (
        <section>
          <div>
            <h4>{orderInfo.vipTickets > 1 ? "VIP tickets" : "VIP ticket"}</h4>
            <h4>X{orderInfo.vipTickets}</h4>
            <h4>{totalVIP},-</h4>
          </div>
        </section>
      )}

      {orderInfo.regularTickets > 0 && (
        <section>
          <div>
            <h4>{orderInfo.regularTickets > 1 ? "Regular tickets" : "Regular ticket"}</h4>
            <h4>X{orderInfo.regularTickets}</h4>
            <h4>{totalReg},-</h4>
          </div>
        </section>
      )}

      {orderInfo.selectedArea !== "" && (
        <section>
          <h4>{orderInfo.selectedArea}</h4>
        </section>
      )}

      {orderInfo.tentService && (
        <section>
          <div>
            <h4>Tent set up</h4>
            <h4>{setUpPrice},-</h4>
          </div>
        </section>
      )}

      {orderInfo.greenCamping && (
        <section>
          <div>
            <h4>Green camping</h4>
            <h4>{tentPrice},-</h4>
          </div>
        </section>
      )}

      <section>
        <h4>Booking fee</h4>
        <h4>1</h4>
        <h4>99,-</h4>
      </section>

      <section>
        <h4>Total</h4>
        {orderInfo.greenCamping && orderInfo.tentService ? (
          <h4>{grandTotal + tentPrice + setUpPrice},-</h4>
        ) : orderInfo.greenCamping ? (
          <h4>{grandTotal + tentPrice},-</h4>
        ) : orderInfo.tentService ? (
          <h4>{grandTotal + setUpPrice},-</h4>
        ) : (
          <h4>{grandTotal},-</h4>
        )}
      </section>

      <div className="input-box box">
        <div className="input-text">
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <p>{props.description}</p>
        </div>

        <div className="price-input">
          <h3>{props.price}</h3>
          {props.name === "TentSetup" ? (
            <div className="checkbox-container">
              <input
                name={props.name}
                type="checkbox"
                className="hidden"
                id="checkbox"
                onChange={props.tentSetUp}
              />
              <label htmlFor="checkbox" className="checkbox-label" />
            </div>
          ) : (
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="hidden"
                id="checkbox2"
                onChange={props.tentGreen}
              />
              <label htmlFor="checkbox2" className="checkbox-label" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalculateFunction;
