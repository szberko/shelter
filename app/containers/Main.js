import React, {Component} from 'react';
import {Animal} from './Animal';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import axios from 'axios';


export class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            animals: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3004/animals').then(response => {
            const animals = response.data;
            this.setState({ animals });
        })
    }
    
    render() {
        return (
            <div className="main-container__body">
                <div className="body__menu">
                <Tabs selectedTabPanelClassName="body__content">
                    <TabList>
                        <Tab>Gazdára vár</Tab>
                        <Tab>Örökbeadott</Tab>
                    </TabList>
                
                    <TabPanel>
                    {
                        this.state.animals.map(function(animal, i){
                            if(!animal.adopted && !animal.removed){
                                return <Animal 
                                        key={i}
                                        animal={animal}
                                        />
                            }
                        })
                    }
                    </TabPanel>
                    <TabPanel>
                    {
                        this.state.animals.map(function(animal, i){
                            if(animal.adopted && !animal.removed){
                                return <Animal 
                                        key={i}
                                        animal={animal}
                                        />
                            }
                        })
                    }
                    </TabPanel>
                </Tabs>
                    <div id="filter">Szűrő</div>
                </div>
            </div>
        );
    }
}