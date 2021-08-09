import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Group,
  Link,
  Text,
  Feature,
  FeatureCallOut,
  PlayButton,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Profile,
  Dropdown,
} from "./styles/header";

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
  return <Group {...restOfProps}>{children}</Group>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restOfProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restOfProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/images/icons/search.png" alt="Search " />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Logo = function HeaderLogo({ to, ...restOfProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restOfProps} />
    </RouterLink>
  );
};

Header.Text = function HeaderText({ children, ...restOfProps }) {
  return <Text {...restOfProps}>{children}</Text>;
};

Header.Link = function HeaderLink({ children, ...restOfProps }) {
  return <Link {...restOfProps}>{children}</Link>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restOfProps }) {
  return <ButtonLink {...restOfProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restOfProps }) {
  return <Feature {...restOfProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restOfProps
}) {
  return <FeatureCallOut {...restOfProps}>{children}</FeatureCallOut>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restOfProps }) {
  return <PlayButton {...restOfProps}>{children}</PlayButton>;
};

Header.Picture = function HeaderPicture({ src, ...restOfProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restOfProps} />;
};

Header.Profile = function HeaderProfile({ children, ...restOfProps }) {
  return <Profile {...restOfProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restOfProps }) {
  return <Dropdown {...restOfProps}>{children}</Dropdown>;
};
