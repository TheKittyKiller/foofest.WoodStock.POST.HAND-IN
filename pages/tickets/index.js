import React from "react";
import { useRouter } from "next/router";
import CulculateFunction from "../../components/UI-cards/calculatefunction";
import InputField from "../../components/UI-cards/InputField";
import SelectionAreaOptions from "../../components/UI-cards/SelectionAreaOptions";

function FirstStepBooking(props) {
  const availableSpotArray = props.availableSpotData;
  const router = useRouter();

  let ticketsValid = false;

  if (props.orderInfo.totalTickets > 0) {
    ticketsValid = true;
  }
  if (props.orderInfo.totalTickets === 0) {
    ticketsValid = false;
  }

  async function confirmBooking() {
    const id = await reserveCampingSpot(props.orderInfo.selectedArea, props.orderInfo.totalTickets);
    await spotAreaValid(id);
  }

  async function spotAreaValid(id) {
    const areaArray = availableSpotArray; // Assign the availableSpotArray to areaArray


    
    if (props.orderInfo.selectedArea === "Svartheim") {
      if (props.orderInfo.totalTickets <= areaArray[0]?.available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    } else if (props.orderInfo.selectedArea === "Nilfheim") {
      if (props.orderInfo.totalTickets <= areaArray[1]?.available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    } else if (props.orderInfo.selectedArea === "Helheim") {
      if (props.orderInfo.totalTickets <= areaArray[2]?.available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    } else if (props.orderInfo.selectedArea === "Muspelheim") {
      if (props.orderInfo.totalTickets <= areaArray[3]?.available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    } else if (props.orderInfo.selectedArea === "Alfheim") {
      if (props.orderInfo.totalTickets <= areaArray[4]?.available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/bookingStep2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    } else {
      props.setOrderInfo({ ...props.orderInfo, validates: false });
      console.log("area validation: no bueno");
    }
  }

  async function reserveCampingSpot(chosenArea, chosenAmount) {
    const request = await fetch("https://bittersweet-painted-willow.glitch.me/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ area: chosenArea, amount: chosenAmount }),
    });

    const response = await request.json();
    const id = response.id;
    console.log("id:", id);
    return id;
  }

  function cancelBooking() {
    router.push("/");
  }


  return (
    <div>
      <h2>Select your tickets</h2>
      <InputField
        updateRegularTickets={props.updateRegularTickets}
        updateVIPTickets={props.updateVIPTickets}
        title={"Regular"}
        name={"RegularTicket"}
        price={"799,-"}
        setTickets={props.setTickets}
      />
      <InputField
        
        updateVIPTickets={props.updateVIPTickets}
        title={"VIP"}
        name={"VIPTicket"}
        price={"1299,-"}
      />
      <h2>Select your camping area</h2>
      <SelectionAreaOptions
      selectArea={props.selectArea}
        selectedSpot={props.selectedSpot}
        selectOption1={availableSpotArray[0]?.area}
        selectOption1Space={availableSpotArray[0]?.available}
        selectOption2={availableSpotArray[1]?.area}
        selectOption2Space={availableSpotArray[1]?.available}
        selectOption3={availableSpotArray[2]?.area}
        selectOption3Space={availableSpotArray[2]?.available}
        selectOption4={availableSpotArray[3]?.area}
        selectOption4Space={availableSpotArray[3]?.available}
        selectOption5={availableSpotArray[4]?.area}
        selectOption5Space={availableSpotArray[4]?.available}
      />
      <CulculateFunction orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} />
      <div>
        <button onClick={cancelBooking}>Cancel</button>
        <button onClick={confirmBooking}>Select Camping Options</button>
      </div>
    </div>
  );
}

export default FirstStepBooking;

// Fetch data
export async function getServerSideProps() {
  const res = await fetch("https://bittersweet-painted-willow.glitch.me/available-spots");
  const availableSpotData = await res.json();

  return {
    props: { availableSpotData },
  };
}
