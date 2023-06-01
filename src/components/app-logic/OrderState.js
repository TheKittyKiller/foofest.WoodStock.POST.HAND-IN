import { useEffect, useState } from "react";

export default function OrderState() {
  const [orderInfo, setOrderInfo] = useState({
    vipTickets: 0,
    regularTickets: 0,
    totalTickets: 0,
    selectedArea: "",
    totalCost: 0,
    validates: null,
    orderID: "",

  });

  useEffect(() => {
    function setTickets() {
      let totalTickets = orderInfo.vipTickets + orderInfo.regularTickets;
      setOrderInfo({ ...orderInfo, totalTickets: totalTickets });
    }
    setTickets();
  }, [orderInfo.regularTickets, orderInfo.vipTickets]);

  return { orderInfo, setOrderInfo };
}
