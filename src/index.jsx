import React from "react";
import ReactDOM from "react-dom";
import State from "./state/App";
import Redux from "./redux/App";
import ReduxHooks from "./redux-hooks/App";
import ReduxToolkit from "./redux-toolkit/App";
import ReduxHooksToolkit from "./redux-hooks-toolkit/App";
import ReduxZero from "./redux-zero/App";

ReactDOM.render(
    <>
        <h1>using State</h1>
        <State />
        <hr />
        <h1>using Redux</h1>
        <Redux />
        <hr />
        <h1>using Redux hooks</h1>
        <ReduxHooks />
        <hr />
        <h1>using Redux toolkit</h1>
        <ReduxToolkit />
        <hr />
        <h1>using Redux hooks & toolkit</h1>
        <ReduxHooksToolkit />
        <hr />
        <h1>using Redux zero</h1>
        <ReduxZero />
        <hr />
    </>
    , document.getElementById("root"));
