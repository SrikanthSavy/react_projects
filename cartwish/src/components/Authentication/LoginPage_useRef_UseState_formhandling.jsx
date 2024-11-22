import React, { useRef, useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  //const nameRef = useRef(null);
  //const phoneRef = useRef(null);

  const [user, setUser] = useState({
    name: "",
    phone: 0,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleFormSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              //   ref={nameRef}
              className="form_text_input"
              id="name"
              placeholder="Enter your Name"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              value={user.name}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              //   ref={phoneRef}
              className="form_text_input"
              id="phone"
              placeholder="Enter Your Phone No"
              onChange={(e) => {
                setUser({ ...user, phone: parseInt(e.target.value) });
              }}
              value={user.phone}
            />
          </div>
          <button className="search_button form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
