import React, { Fragment } from "react";
import MainNav from "./MainNav";
import classes from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Homepage = () => {
  const sendEmail = () => {
    window.open("mailto:besirovicajsa@gmail.com");
  };
  return (
    <Fragment>
      <MainNav />
      <div className={classes.main}>
        <p>
          Hello, I'm a Front-End developer strongly focused on creating
          functional UI's.
        </p>
        <div className={classes.blank}>
          <div className={classes.card}>
            <h2>Food order app</h2>
            <a>https://github.com/ajsabesirovic/food_order.git</a>

            <p>Lorem ipsum </p>
          </div>
          <div className={classes.card}>
            <h2>Food order app</h2>
            <a>https://github.com/ajsabesirovic/food_order.git</a>

            <p>Lorem ipsum </p>
          </div>
          <div className={classes.card}>
            <h2>Food order app</h2>
            <a>https://github.com/ajsabesirovic/food_order.git</a>

            <p>Lorem ipsum </p>
          </div>
          <div className={classes.card}>
            <h2>Food order app</h2>
            <a>https://github.com/ajsabesirovic/food_order.git</a>

            <p>Lorem ipsum </p>
          </div>
        </div>

        <h2>Get in touch</h2>
        <button onClick={sendEmail}>besirovicajsa@gmail.com</button>
        <div className={classes.icons}>
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.icon}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faGithub}
            className={classes.icon}
          ></FontAwesomeIcon>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
// faGithub
