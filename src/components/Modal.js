import React from "react";
import ReactDOM from "react-dom/client";
import PortalReactDOM from "react-dom";

const Modal = (props) => {
  return PortalReactDOM.createPortal(
    <div className="ui dimmer show modals visible active">
      <div className="ui raised very padded text container segment">
        I am a modal
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
