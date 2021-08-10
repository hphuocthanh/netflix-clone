import React, { useState, useContext, useEffect } from "react";
import Fuse from "fuse.js";

import { Card, Header, Loading, Player } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [category, setCategory] = useState("series");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoUrl} /> : <Loading.ReleaseBody />}
      <Header src="goblin" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.png"
              alt="Notflix"
            />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={profile.photoUrl} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile.photoUrl} />
                  <Header.Link>{profile.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Goblin</Header.FeatureCallOut>
          <Header.Text>
            Kim Shin, an immortal goblin, goes to find a human bride to remove
            an invisible sword from his chest and end his life. One day, school
            student Ji Eun-Tak confesses to him that she is the chosen one.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.Subtitle>{item.title}</Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfile={setProfile} />
  );
}
