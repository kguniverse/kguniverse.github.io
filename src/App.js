import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import BlogPost from "./containers/blogPost/BlogPost";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/" component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default App;
