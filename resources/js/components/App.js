//Modules
import React from "react";
import ReactDOM from "react-dom";
//SASS
//Base
import "./App.scss";
//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers/rootReducer";
//Components
import Routes from "./Routes/Routes";

//Redux Setup
const store = createStore(
    rootReducer,
    composeWithDevTools(compose(applyMiddleware(thunk)))
);
const app = (
    <Provider store={store}>
        <Routes />
    </Provider>
);

//Inject React Into DOM
if (document.getElementById("app")) {
    ReactDOM.render(app, document.getElementById("app"));
}
