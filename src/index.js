import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./store";
import { LOGGIN } from "./constants/ActionsType";
import jwtDecode from "jwt-decode";
import "./styles/style-component.css";
import "./styles/style.scss";

console.log("STARTING PROJECT");
let token = localStorage.getItem("token");
if (token) {
    const userData = jwtDecode(token);
    store.dispatch({ type: LOGGIN, payload: { name: userData.username } });
}

ReactDOM.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
