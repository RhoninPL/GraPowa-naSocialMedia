import { Calendar } from "office-ui-fabric-react/lib/Calendar";
import * as React from "react";
import {HoursForm } from "../hoursForm/hoursForm";
import "./content.scss";
import { CheckBase, Checkbox, TextField, Button } from "office-ui-fabric-react";

import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { lorem } from 'office-ui-fabric-react/lib/utilities/exampleData';
interface IContentProps {
    className: string;
}

const DayPickerStrings = {
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],

    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

    shortDays: ["S", "M", "T", "W", "T", "F", "S"],

    goToToday: "Go to today",
    weekNumberFormatString: "Week number {0}",
};

interface IContentState {
    isVisible: boolean
    date: Date
}

export class Content extends React.Component<IContentProps, IContentState> {
    constructor(prop) {
        super(prop);

        this.state = {
            isVisible: false,
            date: null
        };
    }
    private onSelectedDate = (date: Date, selectedDateRangeArray?: Date[]) => {
        // console.log(date)
        // console.log(selectedDateRangeArray)
        this.setState({
            isVisible: true,
            date: date
        })
    }

    private save = (value) => {
        alert(`Zapisales: ${value}`);
    }

    public render() {
        return (<div className="container">
        
        <TextField label="Napisz post..." multiline autoAdjustHeight rows={4} value={lorem(100)} />
        <DefaultButton
            data-automation-id="test"
            className="save-button"
            allowDisabledFocus={true}
            text="Save"
            onClick={this.save}
          />
        </div>);
    }
}