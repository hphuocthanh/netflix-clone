import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink, Group, Link, Text } from "./styles/header"

export default function Header({
  isBgIncluded = true,
  children,
  ...restOfProps
}) {
  return isBgIncluded ? (
    <Background {...restOfProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restOfProps }) {
  return <Container {...restOfProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restOfProps }) {
  return <Group {...restOfProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...restOfProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restOfProps} />
    </RouterLink>
  );
};

Header.Text = function HeaderText({ children, ...restOfProps }) {
  return (
    <Text {...restOfProps}>
      {children}
    </Text>
  );
};

Header.Link = function HeaderLink({ children, ...restOfProps }) {
  return (
    <Link {...restOfProps}>
      {children}
    </Link>
  );
};


Header.ButtonLink = function HeaderButtonLink({ children, ...restOfProps }) {
    return (
      <ButtonLink {...restOfProps}>
        {children}
      </ButtonLink>
    );
  };
