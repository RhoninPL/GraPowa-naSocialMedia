import { INavLinkGroup, Nav } from "office-ui-fabric-react/lib/Nav";
import * as React from "react";
import "./sidebar.scss";

export class SideBar extends React.Component<ISideBarProps, any> {
    constructor(props: ISideBarProps) {
        super(props);
        this.state = {
            collapsed: defaultCollapsed,
            expanded: defaultExpanded,
            groups: defaultGroups,
        };
    }

    public render() {
        return (
            <div className="sidebar">
                <Nav groups={this.state.groups}
                    expandedStateText={this.state.expanded}
                    collapsedStateText={this.state.collapsed}
                />
            </div>
        );
    }
}

export interface ISideBarProps {
    groups?: INavLinkGroup;
    expanded?: string;
    collapsed?: string;
    className: string;
}

// tslint:disable
const defaultGroups = [{
    links: [{
        name: 'Home',
        url: 'http://example.com',
        links: [{
            icon: 'ActivateOrders',
            name: 'Aktywność',
            url: 'http://msn.com',
        }, {
            icon: 'News',
            name: 'Nowości',
            url: 'http://msn.com',
        }],
        isExpanded: true,
    }, {
        icon: 'OpenFile',
        name: 'Pliki',
        url: 'http://example.com',
        isExpanded: true,
    }, {
        icon: 'Page',
        name: 'Strony',
        url: 'http://msn.com',
    }, {
        icon: 'DietPlanNotebook',
        name: 'Notatki',
        url: 'http://msn.com',
    }]
}]


const defaultExpanded = 'expanded'
const defaultCollapsed = 'collapsed'

// const SidebarMenu = ({ groups, expanded, collapsed }) => (
//     <div className='SidebarMenu'>
//         <Nav groups={groups}
//             expandedStateText={expanded}
//             collapsedStateText={collapsed}
//         />
//     </div>
// )
