import React, {Component} from 'react';

export class Navigation extends Component{
    render() {
        return (
            <div className="navbar">
                <a className={"navbar__elem " + (this.props.selectedOption === 'not_adapted' ? 'navbar__current' : '')}
                    onClick={() => this.props.changeNavigation('not_adapted')}
                    >
                    Gazdára vár
                </a>
                <a className={"navbar__elem " + (this.props.selectedOption === 'adapted' ? 'navbar__current' : '')}
                    onClick={() => this.props.changeNavigation('adapted')}
                    >
                    Örökbeadott
                </a>
                <div className="navbar__elem dropdown">
                    <button className="dropbtn">Szűrő 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a onClick={() => this.props.changeType('all')}>Mind</a>
                    <a onClick={() => this.props.changeType('dog')}>Kutya</a>
                    <a onClick={() => this.props.changeType('cat')}>Macska</a>
                    </div>
                </div> 
            </div>
        )
    }
}