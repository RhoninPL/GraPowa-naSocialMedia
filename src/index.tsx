import * as React from "react";
import * as ReactDOM from "react-dom";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { App } from "./App";
import "./theme-colors.scss";
import { loadTheme, createTheme } from "@uifabric/styling";
import { Fabric } from "office-ui-fabric-react";


initializeIcons();

loadTheme({
    palette: {
        "themePrimary": "#4267b2",
        "themeLighterAlt": "#f6f8fc",
        "themeLighter": "#dae2f3",
        "themeLight": "#bccbe8",
        "themeTertiary": "#829cd1",
        "themeSecondary": "#5476bc",
        "themeDarkAlt": "#3b5da1",
        "themeDark": "#324f88",
        "themeDarker": "#253a64",
        "neutralLighterAlt": "#f8f8f8",
        "neutralLighter": "#f4f4f4",
        "neutralLight": "#eaeaea",
        "neutralQuaternaryAlt": "#dadada",
        "neutralQuaternary": "#d0d0d0",
        "neutralTertiaryAlt": "#c8c8c8",
        "neutralTertiary": "#c2c2c2",
        "neutralSecondary": "#858585",
        "neutralPrimaryAlt": "#4b4b4b",
        "neutralPrimary": "#333",
        "neutralDark": "#272727",
        "black": "#1d1d1d",
        "white": "#fff",
        "bodyBackground": "#e9ebee",
        "bodyText": "#333"
    }
})

ReactDOM.render(
    <Fabric>
        <App />
    </Fabric>,
    document.getElementById("root")
);