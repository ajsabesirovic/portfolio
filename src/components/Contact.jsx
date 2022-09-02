import React from "react";
import classes from "./Contact.module.css";
import MainNav from "./MainNav";
import { Input, Textarea } from "@mantine/core";

function Home() {
  return (
    <>
      <MainNav />
      <div className={classes.main}>
        <h3>
          GET IN TOUCH
          <span>CONTACT</span>
        </h3>
        <form className={classes.form}>
          <Input
            placeholder="Name"
            style={{
              width: "40%",
              margin: "30px",
              border: "none",
              borderBottom: "2px solid #f0f0f0",
              fontSize: "15px",
              backgroundColor: "#f7f7f7",
            }}
            radius="xs"
            variant="filled"
            size="md"
          />
          <Input
            variant="filled"
            placeholder="Email"
            style={{ width: "40%", margin: "30px" }}
            radius="xs"
            size="md"
          />
          <Textarea
            placeholder="Message"
            variant="filled"
            type="textbox"
            style={{ width: "40%", margin: "30px" }}
            radius="xs"
            minRows={3}
            size="md"
          />
        </form>

        <div className={classes.container}>
          <i class="fa fa-envelope"></i>
          <div className="container-detail">
            <h6>Call me</h6>
            <p>+381644630854</p>
          </div>
        </div>

        <div className={classes.contactDetails}>
          <i class="fa fa-home"></i>
        </div>
        <div className={classes.contactDetails}>
          <i class="fa fa-phone"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
