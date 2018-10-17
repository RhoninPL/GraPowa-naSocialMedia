import * as React from "react";
import "./App.css";
import { Content } from "./components/content/content";
import { NavBar } from "./components/menubar/menubar";
import { SideBar } from "./components/sidebar/sidebar";
import { BrowserRouter as Router } from "react-router-dom";

export class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="app">
          <NavBar className="header" />
          <div className="body">
            <SideBar className="sidebar" />
            <Content className="content" />
          </div>
          {/* <Footer className="footer" /> */}
        </div>
      </Router>
    );
  }
}