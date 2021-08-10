import React from "react";
import {
  Container,
  Input,
  Error,
  Submit,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Provider,
  Icon
} from "./styles/form";

export default function Form({ children, ...restOfProps }) {
  return <Container {...restOfProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restOfProps }) {
  return <Base {...restOfProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restOfProps }) {
  return <Title {...restOfProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restOfProps }) {
  return <Text {...restOfProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restOfProps }) {
  return <TextSmall {...restOfProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restOfProps }) {
  return <Link {...restOfProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restOfProps }) {
  return <Input {...restOfProps}>{children}</Input>;
};

Form.Error = function FormError({ children, ...restOfProps }) {
  return <Error {...restOfProps}>{children}</Error>;
};

Form.Submit = function FormSubmit({ children, ...restOfProps }) {
  return <Submit {...restOfProps}>{children}</Submit>;
};

Form.Provider = function FormProvider({ children, ...restOfProps }) {
  return <Provider {...restOfProps}>{children}</Provider>;
};

Form.Icon = function FormIcon({ src, ...restOfProps }) {
  return <Icon src={src} {...restOfProps} />
};
