import * as React from "react";
import "./content.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from "../about/about";
import { Post } from "../post/post";

interface IContentProps {
    className: string;
}

interface IContentState {
    isVisible: boolean
    date: Date
}

export class Content extends React.Component<any, any> {
    private save = (value) => {
        alert(`Zapisales: ${value}`);
    }

    public render() {
        return (<div className="container">            
            <Route exact path="/" component={Post} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Post} />
        </div>);
    }
}