import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Input = styled.input`
    background-color: #333;
    border-radius: 4px;
    border: 0;
    color: white;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;

    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Error = styled.div`
    background-color: #E87C03;
    border-radius: 4px;
    font-size: 0.875rem;
    margin: 0 0 16;
    color: white;
    padding: 15px 20px;
`;

export const Submit = styled.button`
    background-color: #E50914;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 1em;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const Text = styled.h1`
    color: #737373;
    font-size: 1rem;
    font-weight: 500;
`;

export const TextSmall = styled.h2`
    margin-top: 10px;
    font-size: 0.8125rem;
    line-height: normal;
    color: #8c8c8c;
`;

export const Link = styled(RouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Provider = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    margin: 2em;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid white;    
`
export const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    filter: brightness(0) invert(1);
`