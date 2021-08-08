import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header"

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

Header.Logo = function HeaderLogo({ to, ...restOfProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restOfProps} />
    </RouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restOfProps }) {
    return (
      <ButtonLink {...restOfProps}>
        {children}
      </ButtonLink>
    );
  };
