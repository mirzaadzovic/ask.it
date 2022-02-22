import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import "./Register.css";
import { useForm } from "react-hook-form";
import {
  login,
  registerUser,
  resetUser,
} from "../../redux/actions/authActions";
import {
  selectAuthMessage,
  selectIsError,
  selectUser,
} from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { resetQuestions } from "../../redux/actions/questionsActions";

const Register = ({ handleRegister, isError, message, user, reset }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) navigate("/");
    return () => reset();
  }, [user, navigate]);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div className="register app__card">
      <Logo />
      <form
        className="app__authForm"
        onSubmit={handleSubmit(() => {
          handleRegister(watch());
        })}
      >
        <h2>Register</h2>
        {isError && (
          <p className="app__authForm--error app__error">{message}</p>
        )}
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          {...register("firstname", {
            required: "Required!",
            minLength: { value: 2, message: "Too short" },
          })}
        />
        {errors.firstname && (
          <p className="app__error">{errors.firstname.message}</p>
        )}
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          {...register("lastname", {
            required: "Required!",
            minLength: { value: 2, message: "Too short" },
          })}
        />
        {errors.lastname && (
          <p className="app__error">{errors.lastname.message}</p>
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
          type="text"
          placeholder="Avatar URL"
          {...register("avatarurl")}
        />

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
          Register
        </button>
        <Link to="/login"> Already have an account? Login now</Link>
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
    handleRegister: (data) => dispatch(registerUser(data)),
    reset: () => dispatch(resetQuestions()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
