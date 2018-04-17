import React, {Component} from 'react';
import axios from 'axios';

export class Animal extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: "",
        };

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.adapt = this.adapt.bind(this);
        this.remove = this.remove.bind(this);
    }

    mouseOver() {
        this.setState({hover: "animal--mouse-over"});
    }

    mouseOut() {
        this.setState({hover: ""});
    }

    adapt() {
        this.props.animal.adopted = true;
        axios.put('http://localhost:3004/animals/' + this.props.animal.id, this.props.animal).then(response => {
            if(response.status === 200){
                this.props.updateAnimals();
            }
        });
        
    }

    remove() {
        this.props.animal.removed = true;
        axios.put('http://localhost:3004/animals/' + this.props.animal.id, this.props.animal).then(response => {
            if(response.status === 200){
                this.props.updateAnimals();
            }
        })
    }

    render() {
        return (
            <div className="animal"
                onMouseEnter={this.mouseOver}
                onMouseLeave={this.mouseOut}
                >

                <div className="animal__id">
                    <div className="animal__pic"></div>
                    <div className="animal__metadata">
                        <span className="metadata__name">{this.props.animal.name} ({this.props.animal.year})</span>
                        <span className="metadata__others">Chip-szám: {this.props.animal.chip}</span>
                        <span className="metadata__others">Szőrszín: {this.props.animal.color}</span>
                    </div>
                </div>
                
                <div className="animal__type">{this.props.animal.type}</div>

                <div className={"animal__options " + (this.props.animal.adopted == false ? this.state.hover : '') }>
                    <button className="options__adapt" onClick={() => this.adapt()}>Adoptálás</button>
                    <div className="options__remove" onClick={() => this.remove()}>
                        <img src={require('./../assets/group-9.png')} 
                        srcSet={require("./../assets/group-9@2x.png") + " 2x," + require("./../assets/group-9@3x.png") + " 3x"}/>
                    </div>
                </div>
            </div>
        );
    }
}