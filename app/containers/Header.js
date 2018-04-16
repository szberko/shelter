import React, {Component} from 'react';

export class Header extends Component {
    render () {
        return (
            <div className="main-container__header">
                <div id="logo">
                    <img src={require('./../assets/logo-4.png')} 
                    srcSet={require("./../assets/logo-4@2x.png") + " 2x," + require("./../assets/logo-4@3x.png") + " 3x"}/>
                </div>
                <div id="company-name">Lagrande Alapítványi Menhely</div>
            </div>
        );
    }
}