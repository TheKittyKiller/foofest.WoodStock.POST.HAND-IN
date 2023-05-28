
import React from "react";
import { useRouter } from "next/router";


// Fetch data
export async function getServerSideProps (){
    const ret=await fetch("https://bittersweet-painted-willow.glitch.me/available-spots"); 
    const availableSpotData=await res.json(); 
    console.log( availableSpotData); 

    return {
        props:{availableSpotData},

    };

}