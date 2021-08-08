import React from "react";
import { OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Text>
            Ready to Watch? Enter your email address to start your membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Your Email Address" />
          <OptForm.Button>Try It Now</OptForm.Button>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
