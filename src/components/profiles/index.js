import React from "react"
import { Container, Item, List, Picture, Name, Title } from "./styles/profiles"

export default function Profiles({ children, ...restOfProps }) {
    return (
        <Container {...restOfProps}>{children}</Container>
    )
}

Profiles.User = function ProfilesUser({ children, ...restOfProps }) {
    return <Item {...restOfProps}>{children}</Item>
}

Profiles.List = function ProfilesList({ children, ...restOfProps }) {
    return <List {...restOfProps}>{children}</List>
}

Profiles.Picture = function ProfilesPicture({ src, ...restOfProps }) {
    return <Picture {...restOfProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}/>
}

Profiles.Name = function ProfilesName({ children, ...restOfProps }) {
    return <Name {...restOfProps}>{children}</Name>
}

Profiles.Title = function ProfilesTitle({ children, ...restOfProps }) {
    return <Title {...restOfProps}>{children}</Title>
}