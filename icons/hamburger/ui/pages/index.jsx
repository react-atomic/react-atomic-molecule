import React, {Component} from 'react'; 

/**
 * Production please use
 * import GeometryAngle from 'organism-react-geometryangle';
 */
import {HamburgerIcon, ArrowIcon, XIcon}  from "../../src/index";

class Index extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            on: true
        };
    }
    render()
    {
        return (
            <div onClick={()=>{
                let on = this.state.on;
                if (!on) {
                    on = true;
                } else {
                    on = false;
                }
                this.setState({
                    on: on
                });
            }}>
            <HamburgerIcon style={{width:35, height:35}}/>
            <ArrowIcon on={this.state.on} style={{width:35, height:35}}/>
            <XIcon on={this.state.on} style={{width:35, height:35}}/>
            </div>
        );
    }
}

export default Index;
