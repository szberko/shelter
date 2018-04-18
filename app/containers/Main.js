import React, {Component} from 'react';
import {Animal} from './Animal';
import {Navigation} from './Navigation';
import ReactDOM from 'react-dom';
import axios from 'axios';


export class Main extends Component{
    constructor(props){
        super(props);

        this.animalsChanged = this.animalsChanged.bind(this);
        this.changeNavigation = this.changeNavigation.bind(this);

        this.state = {
            animals: [],
            selectedOption: 'gazdara_var',
            
        }
    }

    animalsChanged() {
        axios.get('http://localhost:3004/animals').then(response => {
            console.log("animalsChanged");
            const animals = response.data;
            this.setState({ animals });
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3004/animals').then(response => {
            const animals = response.data;
            this.setState({ animals });
        })

        
    }

    changeNavigation(navItem){
        this.setState(
            {
                selectedOption : navItem
            }
        );
    }

    render() {
        return (
            <div className="main-container__body">
                <div className="body__menu">
                    <Navigation selectOption={this.changeNavigation}/>
                    {
                        this.state.animals.map((animal, i) => {
                            if(this.state.selectedOption === 'orokbe_adott'){
                                if(animal.adopted && !animal.removed){
                                    return <Animal 
                                            key={i}
                                            animal={animal}
                                            updateAnimals={this.animalsChanged}
                                            />
                                }
                            }else{
                                if(!animal.adopted && !animal.removed){
                                    return <Animal 
                                            key={i}
                                            animal={animal}
                                            updateAnimals={this.animalsChanged}
                                            />
                                }
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}