import React, {Component} from 'react';
import {Animal} from './Animal';
import {Navigation} from './Navigation';
import {Dot} from './Dot';
import ReactDOM from 'react-dom';
import axios from 'axios';


export class Main extends Component{
    constructor(props){
        super(props);

        this.animalsChanged = this.animalsChanged.bind(this);
        this.changeNavigation = this.changeNavigation.bind(this);
        this.changeType = this.changeType.bind(this);

        this.state = {
            animals: [],
            selectedOption: 'not_adapted',
            selectedType: 'all'
        }
    }

    animalsChanged() {
        axios.get('http://localhost:3004/animals').then(response => {
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

    filterAnimals(animals){
        let filteredAnimals = [];
            switch(this.state.selectedOption){
                case 'adapted': {
                    filteredAnimals = animals.filter(animal => animal.adopted && !animal.removed);
                    break;
                }
                case 'not_adapted':{
                    filteredAnimals = animals.filter(animal => !animal.adopted && !animal.removed);
                    break;
                }
            }
       
            switch(this.state.selectedType){
                case 'cat': {
                    filteredAnimals = filteredAnimals.filter(animal => animal.type !== 'Kutya');
                    break;
                }
                case 'dog': {
                    filteredAnimals = filteredAnimals.filter(animal => animal.type !== 'Macska');
                    break;
                }
            }
        return filteredAnimals;
    }

    changeNavigation(navItem){
        this.setState(
            {
                selectedOption : navItem
            }
        );
    }

    changeType(type){
        this.setState(
            {
                selectedType : type
            }
        );
    }

    render() {
        let filteredAnimals = this.filterAnimals(this.state.animals);

        return (
            <div className="main-container__body">
                <div className="body__menu">
                    <Navigation 
                        changeNavigation={this.changeNavigation}
                        changeType={this.changeType}
                        selectedOption={this.state.selectedOption}
                        />
                    {
                        filteredAnimals.map((animal, i) => {
                            return <Animal 
                                    key={i}
                                    animal={animal}
                                    updateAnimals={this.animalsChanged}
                                    />
                        })
                    }
                    <Dot extraClassName="first-dot"/>
                    <Dot/>
                    <Dot/>
                </div>
            </div>
        );
    }
}