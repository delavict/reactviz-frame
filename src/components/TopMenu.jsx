import React from 'react';

export default class TopMenu extends React.PureComponent {
    render(){
        return(
            <div className="topMenu__container">
            <div className="topMenu__content">
                <ul>
                {this.props.menulist.map(item =>
                <li className="topMenu__item" key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
        )     
    }
}