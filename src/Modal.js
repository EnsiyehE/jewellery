import React, { useState } from "react";

export default function ModalWindow({ title, onClose, children }) {
  return (
    <div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="cta">
        <div className="form_container">
          <h2 className={`form_title ${title === "Login" ? "loginn" : ""}`}>
            {title}
          </h2>
          <button className="close-modal" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className={title === "Registration" ? "cta-form" : "cta-form"}>
          {children}
        </form>
      </div>
    </div>
  );
}
