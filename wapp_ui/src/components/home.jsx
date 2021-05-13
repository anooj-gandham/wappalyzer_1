// import "./App.css";
import React, { useState } from "react";
import Form from "./form";
import { Modal } from "./login_modal/login";
// Check the area where unable to click.
function Home() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
    <div>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button onClick={() => setShow(true)} className="btn-openModal">
        Login
      </button>
      <Form />
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default Home;
