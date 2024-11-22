import React from "react";

import "./LoginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  //const form = useForm();
  //console.log(form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitData = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(SubmitData)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form_text_input"
              id="name"
              placeholder="Enter your Name"
              {...register("name", { required: true, minLength: 3 })} //we use spread operator ,as it return couple of values
            />
            {errors.name?.type === "required" && (
              <em className="form_error">Please enter Name.</em>
            )}
            {errors.name?.type === "minLength" && (
              <em className="form_error">Name Should be atlease 3 Char.</em>
            )}
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              className="form_text_input"
              id="phone"
              placeholder="Enter Your Phone No"
              {...register("phone", { valueAsNumber: true })} // Second parameter as an Object , to get value as Int , instead of String
            />
          </div>
          <button className="search_button form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
