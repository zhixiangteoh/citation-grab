import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./Search";
import List from "./List";
import Menu from "./Menu";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Menu />
          <Route path="/citation-grab/" exact component={Search} />
          <Route path="/citation-grab/list" exact component={List} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
