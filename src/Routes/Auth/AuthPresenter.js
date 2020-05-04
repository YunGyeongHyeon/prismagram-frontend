/** @format */

import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  max-width: 350px;
  width: 100%;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
`;

export default ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" ? (
        <form onSubmit={onSubmit}>
          <Input placeholder={"email"} {...email} />
          <Button text={"LOGIN"} />
        </form>
      ) : (
        <form>
          <Input placeholder={"First name"} {...firstName} />
          <Input placeholder={"Last name"} {...lastName} />
          <Input placeholder={"Email"} {...email} />
          <Input placeholder={"Username"} {...username} />
          <Button text={"SIGN UP"} />
        </form>
      )}
    </Form>
    <StateChanger>
      {action === "logIn" ? (
        <>
          Don't have an account?{" "}
          <Link onClick={() => setAction("signUp")}>Sign up</Link>
        </>
      ) : (
        <>
          Have an account?{" "}
          <Link onClick={() => setAction("logIn")}>Log in</Link>
        </>
      )}
    </StateChanger>
  </Wrapper>
);
