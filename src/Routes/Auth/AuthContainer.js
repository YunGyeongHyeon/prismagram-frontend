/** @format */

import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("y300513@naver.com");

  const [requestSecret] = useMutation(LOG_IN, {
    update: (_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("You dont have an account yet, create one");
        setAction("signUp");
      }
    },
    variables: { email: email.value }
  });

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = (e) => {
    console.log("a시발");
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        createAccount();
      } else {
        toast.error("All field are ");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onSubmit}
    />
  );
};
