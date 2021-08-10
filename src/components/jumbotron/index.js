import React from "react";
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
  Animation,
  AnimationText,
} from "./styles/jumbotron";

export default function Jumbotron({
  direction = "row",
  children,
  ...restOfProps
}) {
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

Jumbotron.Animation = function JumbotronAnimation({
  video,
  image2,
  text,
  text2,
  ...restOfProps
}) {
  return typeof video != "undefined" ? (
    <Animation {...restOfProps} watchOnTV>
      <video id="notflix-home-tvshow" playsInline autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </Animation>
  ) : (
    <Animation {...restOfProps} downloadAndWatch>
      <img src={image2} alt="" />
      <AnimationText>
        <div>{text}</div>
        <div>{text2}</div>
      </AnimationText>
    </Animation>
  );
};
