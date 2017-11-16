import React from 'react';
import {connect} from 'react-redux';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import BarChart from './BarChart';

export default class Overview extends React.PureComponent {
    render(){
        const props = {
            width:600,
            height:400,
            data: [
                    {
                        name:'a',
                        value:23
                    },
                    {
                        name:'b',
                        value:11
                    },
                    {
                        name:'c',
                        value:9
                    },
                    {
                        name:'d',
                        value:12
                    },
                    {
                        name:'e',
                        value:6
                    },
                    {
                        name:'f',
                        value:8
                    },
                ],
        };
        return (        
            <div>
                <h1>Overview</h1>
                <BarChart {...props} />           
            </div>
        )
    }
}