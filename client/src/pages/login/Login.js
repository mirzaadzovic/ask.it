import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import "./Login.css";
import { useForm } from "react-hook-form";
import { login, resetUser } from "../../redux/actions/authActions";
import {
  selectAuthMessage,
  selectIsError,
  selectUser,
} from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { resetQuestions } from "../../redux/actions/questionsActions";

const Login = ({ handleLogin, isError, message, user, reset }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) navigate("/");
    // return () => reset();
  }, [user, navigate]);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div className="login app__card">
      <Logo />
      <form
        className="app__authForm"
        onSubmit={handleSubmit(() => {
          handleLogin(watch());
        })}
      >
        <h2>Login</h2>
        {isError && (
          <p className="app__authForm--error app__error">{message}</p>
        )}
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
const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    isError: selectIsError(state),
    message: selectAuthMessage(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (data) => dispatch(login(data)),
    reset: () => dispatch(resetQuestions()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
