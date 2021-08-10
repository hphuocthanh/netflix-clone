import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import Firebase from "firebase/app"

import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  const signInWithFacebook = () => {
    const provider = new Firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer removeSignInBtn={true}>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              type="email"
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
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Provider onClick={signInWithFacebook}>Sign In With Facebook</Form.Provider>
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
