import React, { Component } from 'react';
import MainLogo from '../img/logo/upper_playit_ms_bounce.gif'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <header className={'masthead'}>
                
                <div className={'container'}>

                    <div className={'intro-text'}>
                         <div>
                            <img src={MainLogo} style={{width:'290px'}} />
                        </div> 
                    </div>
                </div>
            </header>
            </React.Fragment>


        );
    }
}

export default Header;