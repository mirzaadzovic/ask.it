import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/loading/Loading";
import QuestionsContainer from "../../components/questions_container/QuestionsContainer";
import { selectUser } from "../../redux/reducers/authReducer";
import APIService from "../../services/APIService";
import "./MyQuestions.css";

const MyQuestions = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const params = useParams();
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState(null);

  const fetchData = async () => {
    const response = await APIService.getById("/users/", params["*"]).catch(
      (err) => null
    );
    if (response) setProfile(response);
    else setError(true);
  };
  useEffect(() => {
    if (!user) navigate("/login");
    fetchData();
  }, [user]);

  if (error)
    return (
      <div className="myQuestions app__questions">
        <div className="myQuestions__info app__card">
          <h4>User not found</h4>
        </div>
      </div>
    );
  else if (!profile)
    return (
      <div className="myQuestions app__questions">
        <div className="myQuestions__info app__card">
          <LoadingSpinner />
        </div>
      </div>
    );
  return (
    <div className="myQuestions app__questions">
      <div className="myQuestions__info app__card">
        <Avatar
          className="myQuestions__avatar"
          src={profile?.avatarurl}
          style={{ height: "4rem", width: "4rem" }}
        />
        <p>
          {profile?.firstname} {profile?.lastname}
        </p>
      </div>
      <QuestionsContainer userId={params["*"]} />
    </div>
  );
};

export default MyQuestions;
