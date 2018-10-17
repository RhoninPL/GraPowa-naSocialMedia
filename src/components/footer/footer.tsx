import * as React from "react";
import "./footer.css";

export interface IFooterProps {
    className: string;
}

export class Footer extends React.Component<IFooterProps, any> {
    public render() {
        return (<div className="footer">
            © Awesome App 2016.
        </div>);
    }
}