import React, {Component} from 'react';

export class Dot extends Component{
    render(){
        return (
            <div className={"dot " + this.props.extraClassName}></div>
        )
    }
}