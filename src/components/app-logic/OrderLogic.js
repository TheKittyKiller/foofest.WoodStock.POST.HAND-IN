export default function OrderLogic(orderInfo) {
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
  
    return { tentPrice, setUpPrice, tentSize };
  }
  