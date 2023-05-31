import "../styles/globals.css";
import {  useState } from "react";
import {
  updateRegularTickets,
  updateVIPTickets,
  tentSetUp,
  tentGreen,
  selectArea,
  setOrderID,
} from "./orderFunctions";

function MyApp({ Component, pageProps }) {
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regularTickets: 0,
    totalTickets: 0,
    validates: null,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    totalCost: 0,
    orderID: "",
    guests: [],
  });

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



  function handleUpdateRegularTickets(event) {
    updateRegularTickets(event, orderInfo, setOrderInfo);
  }

  function handleUpdateVIPTickets(event) {
    updateVIPTickets(event, orderInfo, setOrderInfo);
  }

  function handleTentSetUp(event) {
    tentSetUp(event, orderInfo, setOrderInfo);
  }

  function handleTentGreen(event) {
    tentGreen(event, orderInfo, setOrderInfo);
  }

  function handleSelectArea(e) {
    selectArea(e, orderInfo, setOrderInfo);
  }

  function handleSetOrderID(id) {
    setOrderID(id, orderInfo, setOrderInfo);
  }


  return (
    <>
      <Component
        updateRegularTickets={handleUpdateRegularTickets}
        updateVIPTickets={handleUpdateVIPTickets}
        {...pageProps}
        orderInfo={orderInfo}
        tentSetUp={handleTentSetUp}
        tentGreen={handleTentGreen}
        selectedArea={handleSelectArea}
        tentPrice={tentPrice}
        setUpPrice={setUpPrice}
        tentSize={tentSize}
        setOrderInfo={setOrderInfo}
        setOrderID={handleSetOrderID}
      />
    </>
  );
}

export default MyApp;
