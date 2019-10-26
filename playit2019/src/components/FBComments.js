import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
export default class FBComments extends Component {
  render() {
    return (
      <div className={'container'} style={{marginTop:'150px', marginBottom:'50px', width:'100%'}}>
      <div className={'col-lg-12 text-left'} style={{width:'100%'}}>
          <h2 className={'section-heading text-uppercase'} style={{color:'#F05125', width:'100%'}}>댓글을 부탁드려요! 🙇‍ </h2>

          <FacebookProvider appId="400010584115368">
          <Comments href="https://ubcare.github.io/playit" style={{color:'#F05125', width:'100%', marginLeft:'auto',marginRight:'auto'}}/>
        </FacebookProvider>

      </div>
    </div>

    );
  }
}

