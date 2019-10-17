import React, { Component } from 'react';
import SexyDevImg from '../img/sponser/sexydevelopers.png'
import SexyDevCatchPhraseImg from '../img/sponser/sexydevelopers_catchphrase.png'
import CultureInnovationImg from '../img/sponser/cultureinnovation_team.png'
import CultureInnovationCatchPhraseImg from '../img/sponser/cultureinnovation_team_catchphrase.png'

class Sponser extends Component {
    render() {
        return (
            <div className={'container'} style={{marginTop:'150px', marginBottom:'50px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>후원</h2>
                    <img src={CultureInnovationImg} style={{width:'300px', display:'block', marginLeft:'auto', marginTop:'40px', marginRight:'auto'}}  />
                    <img src={CultureInnovationCatchPhraseImg} style={{height:'30px', display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                    <img src={SexyDevImg} style={{width:'400px', display:'block', marginLeft:'auto', marginTop:'120px', marginRight:'auto'}}  />
                    <img src={SexyDevCatchPhraseImg}  style={{height:'36px', display:'block', marginLeft:'auto', marginRight:'auto'}}  />
                </div>
            </div>
        );
    }
}

export default Sponser;