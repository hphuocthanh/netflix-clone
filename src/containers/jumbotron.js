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
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron>
              )
            })}
          </Jumbotron.Container>
    )
}