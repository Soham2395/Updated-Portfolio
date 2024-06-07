import React from "react";

import { logo } from "../assets";
import { styles } from "../styles";

const Footer = () => {
  return (

    <div className="  flex justify-evenly align-center relative  sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">

      <div className="flex  flex-col items-center">

        <img src={logo} alt="logo" className="w-16  mb-5" />

        <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
          2024 &copy; Soham. All rights reserved.
        </p>
        <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
          sohamchakraborty18.edu@gmail.com
        </p>

      </div>

      <div>

      <div className="hidden lg:block">
      <a href="https://www.hitwebcounter.com" target="_blank">
      <img
      src="https://hitwebcounter.com/counter/counter.php?page=12966378&style=0001&nbdigits=5&type=page&initCount=0"
      title="Counter Widget"
      alt="Visit counter For Websites"
      border="0"
      />
    </a>
    <p className={styles.sectionSubText}>Portfolio Visits</p>
</div>

      </div>
    </div>
  );
};

export default Footer;