import React from "react";
import { useRouter } from "next/router";

import InputField from "../../components/UI-cards/InputField";
import SelectionAreaOptions from "../../components/UI-cards/SelectionAreaOptions"; 

function firstStepBooking(props) {
  const availableSpotArray = props.availableSpotData;
  const router = useRouter();
  async function confirmBooking() {
    const id = await reserveCampingSpot(props);
    await spotAreaValid(id);
  }

  async function spotAreaValid(id) {
    const area = props.selectedArea;
    const index = availableSpotArray.findIndex((item) => item.area === area);
    const available = availableSpotArray[index]?.available || 0;

    if (props.totalTickets <= available) {
      props.setbookingInfos({ ...props, validates: true, orderID: id });

      router.push("/tickets/bookingStep2");

      props.setbookingInfos({ ...props, validates: false });

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
    <div >
      <h2>Select your tickets</h2>
      <InputField updateRegularTickets={props.updateRegularTickets} title={"Regular"} name={"RegularTicket"} price={"799,-"} setTickets={props.setTickets} />
      <InputField updateVIPTickets={props.updateVIPTickets} title={"VIP"} name={"VIPTicket"} price={"1299,-"} />
      <h2>Select your camping area</h2>
      <SelectionAreaOptions
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
      
      <div>
        <button  onClick={cancelBooking}>
          Cancel
        </button>
        <button onClick={confirmBooking}>
          Select Camping Options 
        </button>
      </div>
    </div>
  );
}


export default firstStepBooking;


// Fetch data
export async function getServerSideProps (){
    const res=await fetch("https://bittersweet-painted-willow.glitch.me/available-spots"); 
    const availableSpotData=await res.json(); 


    return {
        props:{availableSpotData},

    };

}

