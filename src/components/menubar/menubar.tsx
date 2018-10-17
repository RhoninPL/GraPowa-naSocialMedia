import * as React from "react";
import "./menubar.scss";

export class NavBar extends React.Component<any, any> {

    public render() {
        return (<div className="NavBar">
            <div className="logo ms-font-xl">
                <strong>Gra poważna - nauka obsługi sieci społecznościowch</strong>
            </div>
        </div>);
    }

}