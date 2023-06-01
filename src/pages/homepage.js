import React from "react";
import BandsCards from "../components/bands-cards/BandsCards";
import { useState, useEffect } from "react";
function Bands() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://bittersweet-painted-willow.glitch.me/bands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);



  return (
    <>
      <BandsCards data={data} />
    </>
  );
}

export default Bands;
