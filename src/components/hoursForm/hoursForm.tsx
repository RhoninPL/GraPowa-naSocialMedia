import { DefaultButton, IButtonProps, INavLinkGroup, Nav, TextField } from "office-ui-fabric-react";
import * as React from "react";
import "./hoursForm.scss";

export class HoursForm extends React.Component<IHoursForm, any> {
    public render() {
        return (
            <div className="ms-Grid hours-form">
                <TextField label={this.props.date.toLocaleDateString("en-US")} placeholder="Enter hours" />
                <DefaultButton text="Save" />
            </div>
        );
    }
}

export interface IHoursForm {
    date: Date
}