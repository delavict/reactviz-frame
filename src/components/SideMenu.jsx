import React from 'react';

export default class SideMenu extends React.PureComponent {
    render(){
        return(
            <div className="sidemenu__container">
                <div className="sidemenu__content">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}