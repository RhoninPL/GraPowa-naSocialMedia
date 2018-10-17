import { INavLinkGroup, Nav } from "office-ui-fabric-react/lib/Nav";
import * as React from "react";
import "./sidebar.scss";
import { withRouter } from 'react-router-dom';

export const SideBar = withRouter(({history}) => {
        return (
            <div className="sidebar">
                <Nav
                    onLinkClick={(event, element) => {
                        event.preventDefault();
                        history.push(element.url);
                    }}
                    groups={defaultGroups}
                />
            </div>
        );
    }
)

export interface ISideBarProps {
    groups?: INavLinkGroup;
    expanded?: string;
    collapsed?: string;
    className: string;
    // withRouter<history>: any;
}

// tslint:disable
const defaultGroups = [{
    links: [{
        name: 'Home',
        url: '/',
        links: [{
            icon: 'ActivateOrders',
            name: 'Aktywność',
            url: 'http://msn.com',
        }, {
            icon: 'Write Post',
            name: '/post',
            url: '/post',
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
    }, {
        icon: 'O nas',
        name: 'O nas',
        url: '/about',
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
