import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

export default function Signin() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" | emailAddress === ""

  const handleSignin = (e) => {
    e.preventDefault();
  };
  return (
      <>
    <HeaderContainer removeSignInBtn={true}>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POSE">
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            placeholder="Password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit
            disabled={isInvalid}
            type="submit"
          >
              Sign In
          </Form.Submit>
          <Form.Text>
              New To Notflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
    <FooterContainer />
    </>
  );
}
