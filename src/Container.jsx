import React from "react";
import State from "./state/App";
import Redux from "./redux/App";

export default () => {
    return (
        <>
            <h1>using State</h1>
            <State />
            <hr/>
            <h1>using Redux</h1>
            <Redux />
        </>
    )
}
