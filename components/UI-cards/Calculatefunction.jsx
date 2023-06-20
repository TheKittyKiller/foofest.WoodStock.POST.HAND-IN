import React from "react";
import styles from "./Calculatefunction.module.css";

function CalculateFunction(props) {
 const { orderInfo } = props;


 const totalVIP = 1299 * orderInfo.vipTickets;
 const totalReg = 799 * orderInfo.regularTickets;
 const grandTotal = totalVIP + totalReg + 99;




 return (
   <div >
     <h2 className={styles.today}>Your order</h2>


     {orderInfo.vipTickets > 0 && (
       <section>
         <div>
           <h3>{orderInfo.vipTickets > 1 ? "VIP tickets:" : "VIP ticket:"}</h3>
           <h3>X{orderInfo.vipTickets}</h3>
           <h3>{totalVIP},-</h3>
         </div>
       </section>
     )}


     {orderInfo.regularTickets > 0 && (
       <section>
         <div>
           <h3>{orderInfo.regularTickets > 1 ? "Regular tickets:" : "Regular ticket:"}</h3>
           <h3>X{orderInfo.regularTickets}</h3>
           <h3>{totalReg},-</h3>
         </div>
       </section>
     )}


     {orderInfo.selectedArea !== "" && (
       <section>
         <h3>{orderInfo.selectedArea}</h3>
       </section>
     )}


     {orderInfo.tentService && (
       <section>
         <div>
           <h3>Tent set up</h3>
           <h3>{setUpPrice},-</h3>
         </div>
       </section>
     )}


     {orderInfo.greenCamping && (
       <section>
         <div>
           <h3>Green camping</h3>
           <h3>{tentPrice},-</h3>
         </div>
       </section>
     )}


     <section>
       <h3>Booking fee:</h3>
       <h3>X1</h3>
       <h3>99,-</h3>
     </section>


     <section>
       <h3>Total:</h3>
       {orderInfo.greenCamping && orderInfo.tentService ? (
         <h3>{grandTotal + tentPrice + setUpPrice},-</h3>
       ) : orderInfo.greenCamping ? (
         <h3>{grandTotal + tentPrice},-</h3>
       ) : orderInfo.tentService ? (
         <h3>{grandTotal + setUpPrice},-</h3>
       ) : (
         <h3>{grandTotal},-</h3>
       )}
     </section>
   </div>
 );
}


export default CalculateFunction;