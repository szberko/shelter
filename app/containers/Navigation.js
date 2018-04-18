import React, {Component} from 'react';

export class Navigation extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="navbar">
                <a href="#home" onClick={() => this.props.selectOption('gazdara_var')}>Gazdára vár</a>
                <a href="#news" onClick={() => this.props.selectOption('orokbe_adott')}>Örökbeadott</a>
                <div className="dropdown">
                    <button className="dropbtn">Szűrő 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Kutya</a>
                    <a href="#">Macska</a>
                    </div>
                </div> 
            </div>
        )
    }
}