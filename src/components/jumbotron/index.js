import React from "react";
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
} from "./styles/jumbotron";

function Jumbotron({ direction = "row", children, ...restOfProps }) {
  return (
    <Item {...restOfProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restOfProps
}) {
  return <Container {...restOfProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restOfProps }) {
  return <Pane {...restOfProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restOfProps }) {
  return <Title {...restOfProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restOfProps }) {
  return <Subtitle {...restOfProps}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restOfProps }) {
  return <Image {...restOfProps} />;
};
export default Jumbotron;
