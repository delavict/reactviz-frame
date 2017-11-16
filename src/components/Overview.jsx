import React from 'react';
import {connect} from 'react-redux';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import BarChart from './BarChart';

import data from './../data/data.json';

export default class Overview extends React.PureComponent {
    render(){
        const props = {
            width:600,
            height:400,
            data: data.root   
        };
        return (        
            <div>
                <h1>Overview</h1>
                <BarChart {...props} />           
            </div>
        )
    }
}