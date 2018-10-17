import * as React from "react";
import "./App.css";
import { Content } from "./components/content/content";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/menubar/menubar";
import { SideBar } from "./components/sidebar/sidebar";

export class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <NavBar className="header" />
        <div className="body">
          <SideBar className="sidebar" />
          <Content className="content" />
        </div>
        {/* <Footer className="footer" /> */}
      </div>
    );
  }
}