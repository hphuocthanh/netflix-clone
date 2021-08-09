import React from "react"
import { ReleaseBody, Spinner, LockBody, Picture } from "./styles/loading"

export default function Loading({ src, ...restOfProps }) {
    return (
        <Spinner {...restOfProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}
