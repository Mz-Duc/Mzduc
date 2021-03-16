
import React, {Component} from 'react';
import sample from './video/y2mate.com - Billie Eilish Performs Everything I Wanted at the 2021 GRAMMYs_480p.mp4';
class Background extends Component {
    
    render () {
        return (
        <video className='background-video' autoPlay loop muted
        style={{
            position:"absolute",
            width:"100%",
            left:"50%",
            top:"50%",
            height:"100%",
            objectFit:"cover",
            transform:"translate(-50%,-50%)",
            zIndex:"-1"
        }}>
            <source src={sample} type='video/mp4' />
        </video>
        )
    }
};

export default Background;