import React, { Component } from 'react';
import SexyDevImg from '../img/sponser/sexydevelopers.png'
import SexyDevCatchPhraseImg from '../img/sponser/sexydevelopers_catchphrase.png'
import CultureInnovationImg from '../img/sponser/cultureinnovation_team.png'
import CultureInnovationCatchPhraseImg from '../img/sponser/cultureinnovation_team_catchphrase.png'

class Sponser extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>Sponsor</h2>
                    <div className={'row'} style={{color:'#312d3e', marginTop:'20px'}} >
                        <img src={CultureInnovationCatchPhraseImg} style={{height:'50px', display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>
                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={CultureInnovationImg} style={{width:'500px', display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>
                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={SexyDevCatchPhraseImg}  style={{height:'55px', display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>
                    <div className={'row'} style={{color:'#312d3e'}} >
                        <img src={SexyDevImg} style={{display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    </div>

                </div>
            </div>
        );
    }
}

export default Sponser;