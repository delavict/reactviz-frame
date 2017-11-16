import React from 'react';
import {Router,Route} from 'react-router';
import SideMenu from './SideMenu'; 
import TopMenu from './TopMenu';
import About from './About';
import Overview from './Overview';


export default class App extends React.PureComponent {
    render(){
        return (
            <div>
                <SideMenu ref="sidemenu" title="RES" />
                <TopMenu ref="topmenu" menulist={[
                    {path:'/about',
                    pageName:'About'},
                    {path:'/',
                    pageName:'Overview'}
                    ]} />
                <div className="main-content">
                  
                        <Route path="/about" component={About} />
                        <Route exact path="/" component={Overview} />
                    
                </div>
            </div>
        )
    }
}