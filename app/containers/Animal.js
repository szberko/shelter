import React, {Component} from 'react';

export class Animal extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: "",
        };

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver() {
        this.setState({hover: "animal--mouse-over"});
    }

    mouseOut() {
        this.setState({hover: ""});
    }

    render() {
        return (
            <div className="animal"
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                >

                <div className="animal__id">
                    <div className="animal__pic"></div>
                    <div className="animal__metadata">
                        <span className="metadata__name">Morzsi (1)</span>
                        <span className="metadata__others">Chip-szám: 61654684</span>
                        <span className="metadata__others">Szőrszín: vörös</span>
                    </div>
                </div>

                
                <div className="animal__type">
                    Kutya
                </div>
                <div className={"animal__options " + this.state.hover}>
                    <button className="options__adapt">Adoptálás</button>
                    <div className="options__remove">
                    <img src={require('./../assets/group-9.png')} 
                    srcSet={require("./../assets/group-9@2x.png") + " 2x," + require("./../assets/group-9@3x.png") + " 3x"}/>
                    </div>
                </div>
            </div>
        );
    }
}