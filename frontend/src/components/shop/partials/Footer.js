import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "white" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Develop & Designed by MoviesWarriorsl<br></br>
        All Rights Reserverd<br></br>
        Contact Us: +1 547 856 8568<br></br> 
        {moment().format("dddd MM DD yy ")}
      </footer>
    </Fragment>
  );
};

export default Footer;
