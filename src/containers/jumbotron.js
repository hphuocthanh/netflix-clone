import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            {item.video && <Jumbotron.Animation video={item.video} />}
            {item.image2 && item.text && item.text2 && <Jumbotron.Animation image2={item.image2} text={item.text} text2={item.text2} />}
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}
