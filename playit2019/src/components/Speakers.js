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
            <div className={'container'} style={{marginTop:'150px', marginBottom: '30px'}}>
                <div className={'col-lg-12 text-left'}>
                    <h2 className={'section-heading text-uppercase'} style={{color:'#F05125'}}>연사 발표</h2>
                    <div className={'row'} style={{marginTop:'30px'}}>
                        {speakers}
                    </div>
                </div>
            </div>
        );
    }
}
export default Speakers;