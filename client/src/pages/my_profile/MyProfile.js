import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import "./MyProfile.css";
import { useForm } from "react-hook-form";
import {
  login,
  registerUser,
  resetUser,
  updateUser,
} from "../../redux/actions/authActions";
import {
  selectAuthMessage,
  selectIsError,
  selectUser,
} from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { resetQuestions } from "../../redux/actions/questionsActions";
import { Avatar } from "@mui/material";

const MyProfile = ({ handleEdit, isError, message, user, reset }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const password = useRef({});
  password.current = watch("password", "");

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div className="myProfile app__card">
      <center>
        <Avatar src={user?.avatarUrl} />
      </center>
      <form
        className="app__authForm"
        onSubmit={handleSubmit(() => {
          handleEdit(user.userId, watch());
        })}
      >
        <h2>Edit Profile</h2>
        {isError && (
          <p className="app__authForm--error app__error">{message}</p>
        )}
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          {...register("firstname", {
            value: user?.firstName,
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
            value: user?.lastName,
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
          readOnly={true}
          {...register("email", {
            value: user?.email,
            required: "Required!",
            pattern: { value: emailRegex, message: "Wrong email format" },
          })}
        />
        {errors.email && <p className="app__error">{errors.email.message}</p>}

        <input
          className="form-control"
          type="text"
          placeholder="Avatar URL"
          {...register("avatarurl", { value: user?.avatarUrl })}
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

        <input
          className="form-control"
          type="password"
          placeholder="Confirm password"
          {...register("passwordConfirm", {
            required: "Required!",
            validate: (value) =>
              value === password.current || "The passwords do not match",
            maxLength: 25,
          })}
        />
        {errors.passwordConfirm && (
          <p className="app__error">{errors.passwordConfirm.message}</p>
        )}

        <button
          onClick={() => console.log(password.current)}
          className="btn btn-primary"
          type="submit"
        >
          Save Changes
        </button>
        <Link to="/"> Back to feed</Link>
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
    handleEdit: (id, data) => dispatch(updateUser(id, data)),
    reset: () => dispatch(resetQuestions()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
