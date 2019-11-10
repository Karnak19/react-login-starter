import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home.page";
import Profile from "./components/Profile.page";
import Layout from "./components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
