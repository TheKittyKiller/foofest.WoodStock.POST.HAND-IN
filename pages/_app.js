import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regularTickets: 0,
    totalTickets: 0,
  validates: null,
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




  return (
    <>

        <Component
          updateRegularTickets={updateRegularTickets}
          updateVIPTickets={updateVIPTickets}
          {...pageProps}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}

        />

    </>
  );
}

export default MyApp;




