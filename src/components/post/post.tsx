import * as React from "react";
import { TextField, DefaultButton } from "office-ui-fabric-react";
import { lorem } from "office-ui-fabric-react/lib/utilities/exampleData";

export const Post = () => <div>
    <TextField label="Napisz post..." multiline autoAdjustHeight rows={4} value={lorem(100)} />
    <DefaultButton
        data-automation-id="test"
        className="save-button"
        allowDisabledFocus={true}
        text="Save"
        onClick={this.save}
    />
</div>;