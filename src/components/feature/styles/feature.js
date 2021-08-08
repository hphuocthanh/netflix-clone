import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 130px 45px;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 3.5rem;
    font-weight: 700;
    margin: auto;

    @media (max-width: 900px) {
        font-size: 3rem;
    }

    @media (max-width: 600px) {
        font-size: 2.1875rem;
    }
`;
export const Subtitle = styled.h2`
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`;
