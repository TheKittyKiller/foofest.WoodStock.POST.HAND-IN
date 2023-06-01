import styles from "./NavBar.module.css";
import Image from "next/image";
import bands from "../../../public/bands.svg";
import Link from "next/link";




import { useState } from "react";

function NavBar() {
  const [newLogo] = useState(bands);


 return (
    <section className={styles.navbarWrapper}>
      <div className={styles.navbar}>
       
      <Link className={styles.logo} href="/homepage">
      <Image src={newLogo} alt="logo"></Image></Link>
      <Link className={styles.header} href={"/homepage"}>
        
          <p>Line-Up</p>
        </Link>
        <Link className={styles.header} href={"/schedule"}>
        
          <p>Schedule</p>
        </Link>
        <Link  href={"/tickets"}>
        
          <p>Get Tickets</p>
        </Link>
      </div>
    </section>
  );
}

export default NavBar;