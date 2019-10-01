import React, { Component } from 'react';
import MainLogo from '../img/logo/playit_breath.gif'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <nav className={'navbar navbar-expand-lg fixed-top'}>
                <div className={'container'}>
                    <div className={'collapse navbar-collapse'} id="navbarResponsive">
                        <ul className={'navbar-nav text-uppercase ml-auto'}>
                        <li >
                            <a className= {'nav-link'}  href="#schedules">Schedules</a>
                        </li>
                        <li >
                            <a className= {'nav-link'}  href="#speakers">Speakers</a>
                        </li>
                        <li >
                            <a className= {'nav-link'} href="#session">Session</a>
                        </li>
                        <li>
                            <a className= {'nav-link'} href="#about">About</a>
                        </li>
                        <li>
                            <a className= {'nav-link'}href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                 </div>
            </nav>
            <header>
                
            </header>
            <header className={'masthead'}>
                
                <div className={'container'}>

                    <div className={'intro-text'}>
                         <div>
                            <img src={MainLogo} style={{width:'435px'}} />
                        </div> 
                    </div>
                </div>
            </header>
            </React.Fragment>


        );
    }
}

export default Header;