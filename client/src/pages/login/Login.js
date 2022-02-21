import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div className="login app__card">
      <Logo />
      <form
        className="app__authForm"
        onSubmit={handleSubmit(() => {
          console.log(watch());
        })}
      >
        <h2>Login</h2>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Required!",
            pattern: { value: emailRegex, message: "Wrong email format" },
          })}
        />
        {errors.email && <p className="app__error">{errors.email.message}</p>}

        <input
          className="form-control"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Required!",
            minLength: {
              value: 5,
              message: "Password must contain minimum 5 charachters",
            },
            maxLength: 25,
          })}
        />
        {errors.password && (
          <p className="app__error">{errors.password.message}</p>
        )}

        <button className="btn btn-primary" type="submit">
          Login
        </button>
        <Link to="/register">Don't have an account? Register now</Link>
      </form>
    </div>
  );
};

export default Login;
