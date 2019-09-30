import React, { Component } from 'react';
import Speaker from './Speaker';

class Speakers extends Component {
    render() {
        const { data } = this.props;
        let index = 0 ;
        const speakers = data.map ((info, index) => 
            (<Speaker key={index} info={info}/>)
        );

        return (

            <div className={'container'} style={{marginTop:'50px', marginBottom: '150px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#ff5d00'}}>Speakers</h2>
                    <div className={'row'} style={{marginTop:'50px'}}>
                        {speakers}
                    </div>
                </div>
            </div>
        );
    }
}

export default Speakers;