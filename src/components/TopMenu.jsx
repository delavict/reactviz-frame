import React from 'react';``
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

export default class TopMenu extends React.PureComponent {
    render(){
        return(
            <div className="topMenu__container">
            <div className="topMenu__content">
                <ul>
                {this.props.menulist.map((item,index) =>
                <li key={index} className="topMenu__item">
                <Link to={item.path}>{item.pageName}</Link>
                </li>)}
                </ul>
            </div>
        </div>
        )     
    }
}