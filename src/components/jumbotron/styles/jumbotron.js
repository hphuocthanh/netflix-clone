import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2.8125em;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.16em;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
    margin-bottom: 0.23em;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;

export const Animation = styled.div`
  ${({ watchOnTV }) =>
    watchOnTV &&
    `
      width: 100%;
      height: 100%;
      max-width: 73%;
      max-height: 54%;
      position: absolute;
      top: 48%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  `}

  ${({ downloadAndWatch }) =>
    downloadAndWatch &&
    `
      position: absolute;
      z-index: 3;
      left: 27%;
      bottom: 8%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      margin: 0 auto;
      background: #000;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 50%;
      min-width: 15em;
      padding: .25em .65em;
      border: 2px solid rgba(255,255,255,.25);
      -webkit-box-shadow: 0 0 2em 0 #000;
      -moz-box-shadow: 0 0 2em 0 #000;
      box-shadow: 0 0 2em 0 #000;
      -webkit-border-radius: .75em;
      -moz-border-radius: .75em;
      border-radius: .75em;

      &:after {
        width: 3em;
        height: 3em;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background: url(/images/misc/download-icon.gif) center center no-repeat;
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100%;
        background-size: 100%;
        content: '';
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -moz-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
      }
`}

  video {
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: baseline;
  }

  img {
    margin: 0 1em 0 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -moz-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    max-width: 100%;
    border: 0;
    height: 5em;
  }
`;

export const AnimationText = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  margin: 0.3em 0;

  div:first-of-type {
    color: #fff;
    font-weight: 600;
    font-size: 0.9em;
  }
  div:last-of-type {
    color: #0071eb;
    font-size: .75em;
    font-weight: 400;
  }
`;
