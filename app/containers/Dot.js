import React, {Component} from 'react';

export class Dot extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={"dot " + this.props.extraClassName}></div>
        )
    }
}