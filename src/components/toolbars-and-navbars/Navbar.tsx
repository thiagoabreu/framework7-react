﻿import * as React from 'react';
import * as $ from 'jquery';

import {ThemeTypeEnum} from '../Framework7App';

import '../../less/toolbars.less';

export interface INavbarProps extends React.Props<any> {
    className?: string;
    backLink?: boolean;
    sliding?: boolean;
    title?: string;
    theme?: string;
    layout?: string;    
}

export const Navbar = (props: INavbarProps) => {
    return (
        <div className="navbar">
            {props.children}
        </div>
    );
};