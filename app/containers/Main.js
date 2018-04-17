import React, {Component} from 'react';
import {Animal} from './Animal';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import myData from './../data/animals.json';

export class Main extends Component{
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
                        myData.map(function(animal, i){
                            if(!animal.adopted && !animal.removed){
                                return <Animal 
                                        key={i} 
                                        name={animal.name} 
                                        chip={animal.chip}
                                        color={animal.color}
                                        type={animal.type}/>
                            }
                        })
                    }
                    </TabPanel>
                    <TabPanel>
                    {
                        myData.map(function(animal, i){
                            if(animal.adopted && !animal.removed){
                                return <Animal 
                                        key={i} 
                                        name={animal.name} 
                                        chip={animal.chip}
                                        color={animal.color}
                                        type={animal.type}/>
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