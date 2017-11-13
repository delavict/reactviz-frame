import React from 'react';
import SideMenu from './SideMenu'; 
import TopMenu from './TopMenu';


export default class App extends React.PureComponent {
    render(){
        return (
            
            <div className="hello">

                <SideMenu ref="sidemenu" title="RES" />
                <TopMenu ref="topmenu" menulist={['About','Credits','Overview']} />

                <h1>Hello world</h1> <br />
                Text and another super text
             
            </div>
        )
    }
}