import faqsData from "../fixtures/faqs.json";
import React from "react";
import { Accordion, OptForm } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions?</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to Watch? Enter your email address to start your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder="Your Email Address" />
        <OptForm.Button>Try It Now</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
