import React, {Component} from 'react';

export class Main extends Component{
    render
    () {
        return (
            <div className="main-container__body">
                <div className="body__menu">
                    <ul id="navigation">
                        <li>Gazdára vár</li>
                        <li>Örökbeadott</li>
                    </ul>
                    <div id="filter">Szűrő</div>
                </div>
                <div className="body__content">
                    
                </div>
            </div>
        );
    }
}