import React from "react";

function CulculateFunction(props) {
  const totalVIP = 1299 * props.orderInfo.vipTickets;
  const totalReg = 799 * props.orderInfo.regularTickets;
  const grandTotal = totalVIP + totalReg + 99;

  return (
    <div className="order-overview">
      <h3>Your order</h3>


      {props.orderInfo.vipTickets > 0 && (
        <section className="order-overview-tickets">
          <div className="overview-item ticket">
            <h4>{props.orderInfo.vipTickets > 1 ? "VIP tickets" : "VIP ticket"}</h4>
            <h4>X{props.orderInfo.vipTickets}</h4>
            <h4>{totalVIP},-</h4>
          </div>
        </section>
      )}

      {props.orderInfo.regularTickets > 0 && (
        <section className="order-overview-tickets">
          <div className="overview-item ticket">
            <h4>{props.orderInfo.regularTickets > 1 ? "Regular tickets" : "Regular ticket"}</h4>
            <h4>X{props.orderInfo.regularTickets}</h4>
            <h4>{totalReg},-</h4>
          </div>
        </section>
      )}


      {props.orderInfo.selectedArea !== "" && (
        <section className="order-overview-camp overview-item">
          <h4>{props.orderInfo.selectedArea}</h4>
        </section>
      )}


      {props.orderInfo.tentService && (
        <section className="order-overview-addons">
          <div className="overview-item">
            <h4>Tent set up</h4>
            <h4>{props.setUpPrice},-</h4>
          </div>
        </section>
      )}

      {props.orderInfo.greenCamping && (
        <section className="order-overview-addons">
          <div className="overview-item">
            <h4>Green camping</h4>
            <h4>{props.tentPrice},-</h4>
          </div>
        </section>
      )}


      <section className="order-overview-fee overview-item">
        <h4>Booking fee</h4>
        <h4>1</h4>
        <h4>99,-</h4>
      </section>


      <section className="order-overview-total overview-item">
        <h4>Total</h4>

        {props.orderInfo.greenCamping && props.orderInfo.tentService ? (
          <h4>{grandTotal + props.tentPrice + props.setUpPrice},-</h4>
        ) : props.orderInfo.greenCamping ? (
          <h4>{grandTotal + props.tentPrice},-</h4>
        ) : props.orderInfo.tentService ? (
          <h4>{grandTotal + props.setUpPrice},-</h4>
        ) : (
          <h4>{grandTotal},-</h4>
        )}
      </section>
    </div>
  );
}

export default CulculateFunction;
