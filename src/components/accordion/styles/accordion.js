import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 10px;
  max-width: 1200px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.section`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 2.875rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 1px;
    font-size: 1.625rem;
    font-weight: 400;
    background: #303030;
    padding: .8em 2.2em .8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }
    
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Body = styled.div`
    box-sizing: border-box;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 1.625rem;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    
    @media (max-width: 600px) {
        font-size: 1rem;
        line-height: 22px;
    }
`;
