import React, {Component} from 'react';
import {Animal} from './Animal';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

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
                        <Animal/>
                        <Animal/>
                    </TabPanel>
                    <TabPanel>
                        <Animal/>
                    </TabPanel>
                </Tabs>
                    <div id="filter">Szűrő</div>
                </div>
            </div>
        );
    }
}