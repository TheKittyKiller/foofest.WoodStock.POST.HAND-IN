import "../styles/globals.css";
import { useEffect, useState } from "react";

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
    validates: null,
    orderID: "",
    guests: [],
 });

  useEffect(() => {
    function setTickets() {
      let totalTickets = orderInfo.vipTickets + orderInfo.regularTickets;
      setOrderInfo({ ...orderInfo, totalTickets: totalTickets });
    }
    setTickets();
  }, [orderInfo.regularTickets, orderInfo.vipTickets]);

  function updateRegularTickets(event) {
    let tickReg = event;
    setOrderInfo({ ...orderInfo, regularTickets: tickReg });
  }
  function updateVIPTickets(event) {
    let tickVIP = event;
    setOrderInfo({ ...orderInfo, vipTickets: tickVIP });
  }

  function tentSetUp(event) {
    console.log("setup check: ", event.target);
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, tentService: tentChoice });
  }
  function tentGreen(event) {
    console.log("tentgreen check: ", event.target);
    let tentChoice = event.target.checked;
    setOrderInfo({ ...orderInfo, greenCamping: tentChoice });
  }
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

  const selectArea = (e) => {
    setOrderInfo({
      ...orderInfo,
      selectedArea: e.target.value,
    });
  };

  // ORDER ID
  function setOrderID(id) {
    console.log("setOrderID has this id:", id);
    setOrderInfo({ ...orderInfo, orderID: id });
    console.log("orderID is set to:", orderInfo.orderID);
  }


  return (
    <>

        <Component
          updateRegularTickets={updateRegularTickets}
          updateVIPTickets={updateVIPTickets}
          {...pageProps}
          orderInfo={orderInfo}
          tentSetUp={tentSetUp}
          tentGreen={tentGreen}
          selectedArea={selectArea}
          tentPrice={tentPrice}
          setUpPrice={setUpPrice}
          tentSize={tentSize}
          setOrderInfo={setOrderInfo}
          setOrderID={setOrderID}
        />

    </>
  );
}

export default MyApp;




