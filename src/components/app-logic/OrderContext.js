import React, { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regularTickets: 0,
    totalTickets: 0,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    totalCost: 0,
    orderID: "",
    guests: [],
  });

  useEffect(() => {
    function setTickets() {
      const totalTickets = orderInfo.vipTickets + orderInfo.regularTickets;
      setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, totalTickets }));
    }
    setTickets();
  }, [orderInfo.regularTickets, orderInfo.vipTickets]);

  const updateRegularTickets = (event) => {
    const tickReg = event;
    setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, regularTickets: tickReg }));
  };

  const updateVIPTickets = (event) => {
    const tickVIP = event;
    setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, vipTickets: tickVIP }));
  };

  const tentSetUp = (event) => {
    const tentChoice = event.target.checked;
    setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, tentService: tentChoice }));
  };

  const tentGreen = (event) => {
    const tentChoice = event.target.checked;
    setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, greenCamping: tentChoice }));
  };

  const selectArea = (e) => {
    const selectedArea = e.target.value;
    setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, selectedArea }));
  };

  const setOrderID = (id) => {
    setOrderInfo((prevOrderInfo) => ({ ...prevOrderInfo, orderID: id }));
  };

  return (
    <OrderContext.Provider
      value={{
        orderInfo,
        updateRegularTickets,
        updateVIPTickets,
        tentSetUp,
        tentGreen,
        selectArea,
        setOrderID,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
