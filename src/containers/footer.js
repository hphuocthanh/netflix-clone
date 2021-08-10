import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact me.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://github.com/hphuocthanh">My Github</Footer.Link>
          <Footer.Link href="https://www.linkedin.com/in/hphuocthanh/">My Linkedin</Footer.Link>
          <Footer.Link href="https://www.facebook.com/hphuocthanh/">My Facebook</Footer.Link>
          <Footer.Link href="https://twitter.com/hphuocthanh">My Twitter</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://github.com/hphuocthanh/netflix-clone">Source code</Footer.Link>
          <Footer.Link href="#">Stay</Footer.Link>
          <Footer.Link href="#">Healthy</Footer.Link>
          <Footer.Link href="#">Everyone</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Coffee</Footer.Link>
          <Footer.Link href="#">Mechanical Keyboard</Footer.Link>
          <Footer.Link href="#">Cat</Footer.Link>
          <Footer.Link href="#">Basketball</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Media Centre</Footer.Link>
          <Footer.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Buy Gift Cards</Footer.Link>
          <Footer.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Cookie Preferences</Footer.Link>
          <Footer.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Notflix Vietnam | hphuocthanh</Footer.Text>
    </Footer>
  );
}
