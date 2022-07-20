import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/janne" className="ui header">
          Janne
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis arcu
          purus. Donec non enim nisi. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.{" "}
        </p>
      </div>

      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/connor" className="ui header">
          Connor
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis arcu
          purus. Donec non enim nisi. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.{" "}
        </p>
      </div>

      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/kayn" className="ui header">
          Kayn
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis arcu
          purus. Donec non enim nisi. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
