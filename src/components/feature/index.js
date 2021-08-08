import React from "react"
import { Container, Title, Subtitle } from "./styles/feature"

export default function Feature({ children, ...restOfProps}) {
    return (
        <Container {...restOfProps}>{children}</Container>
    )
}


Feature.Title = function FeatureTitle({ children, ...resOfProps}) {
    return (
        <Title {...resOfProps}>{children}</Title>
    )
}

Feature.Subtitle = function FeatureSubtitle({ children, ...resOfProps}) {
    return (
        <Subtitle {...resOfProps}>{children}</Subtitle>
    )
}