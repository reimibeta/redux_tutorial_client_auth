import React from "react";
import ReactDOM  from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token_access') }
    },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </Provider>,
    document.querySelector("#root")
);