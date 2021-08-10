import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import usersData from "../fixtures/users.json";

export function SelectProfileContainer({ setProfile }) {
  return (
    <>
      <Header isBgIncluded={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Notflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {usersData.map((user) => (
            <Profiles.User
              onClick={() => {
                setProfile({
                  displayName: user.displayName,
                  photoUrl: user.photoUrl,
                });
              }}
            >
              <Profiles.Picture src={user.photoUrl} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          ))}
        </Profiles.List>
      </Profiles>
    </>
  );
}
