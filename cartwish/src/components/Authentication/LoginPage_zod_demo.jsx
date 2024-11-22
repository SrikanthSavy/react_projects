import React from "react";

import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  //Set of rules for form fields
  const schema = z.object({
    email: z.string().email({ message: "Please enter a Valid email." }).min(3),
    password: z
      .string()
      .min(8, { message: "Password should be atleast 8 char" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) }); //using zobResolver we apply the schema to react-hook-form
  //SO, when we have errors, it will be added to reacthookform-errors

  const SubmitData = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(SubmitData)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="form_text_input"
              id="email"
              placeholder="Enter your Email"
              {...register("email")} //we use spread operator ,as it return couple of values
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form_text_input"
              id="password"
              placeholder="Enter Your Password No"
              {...register("password")} // Second parameter as an Object , to get value as Int , instead of String
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>
          <button className="search_button form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
