//Modules
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//Components
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Project from "../Projects/Project/Project";
import Home from "../Home/Home";
import New from "../New/New";
//SASS
import "../App.scss";
import styles from "./Routes.module.scss";

const Routes = () => {
    return (
        <BrowserRouter>
            <div className={styles.Routes}>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        render={() => {
                            return <Redirect to="/home" />;
                        }}
                        exact
                    />
                    <Route path="/home" component={Home} exact />
                    <Route path="/projects" component={Projects} exact />
                    <Route path="/projects/:id" component={Project} exact />
                    <Route path="/new" component={New} exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
