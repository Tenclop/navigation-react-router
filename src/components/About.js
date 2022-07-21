import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const About = () => {
  //redirect to about using useEffect and useNavigate
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/contact");
    }, 2000);
  });

  return (
    <>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header"> About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis arcu
          purus. Donec non enim nisi. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.{" "}
        </p>
      </div>
    </>
  );
};

export default About;
