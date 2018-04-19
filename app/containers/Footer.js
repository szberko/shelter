import React, {Component} from 'react';

export class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="main-container">
                    <div className="main-container__footer">
                        <div className="footer__company-info">
                            <div id="company-info__name">
                                Lagrande Alapítványi Menhely
                            </div>
                            <div id="company-info__copyright">
                                Copyright 2017, Lagrande Magyarország Kft.
                                6722 Szeged, Gutenberg u. 25-27. 
                            </div>
                            <div id="company-info__social">
                                <img src={require('./../assets/linkedin-01.png')} 
                                srcSet={require("./../assets/linkedin-01@2x.png") + " 2x," + require("./../assets/linkedin-01@3x.png") + " 3x"}/>
                                <img src={require('./../assets/facebook-1.png')} 
                                srcSet={require("./../assets/facebook-1@2x.png") + " 2x," + require("./../assets/facebook-1@3x.png") + " 3x"}/>
                            </div>
                        </div>
                        <div className="footer__menu">
                            <div className="menu__item">KAPCSOLAT</div>
                            <div className="menu__item">ÖRÖKBEADÓKNAK</div>
                            <div className="menu__item">ÖRÖKBEFOGADÓKNAK</div>
                            <div className="menu__item">ÁSZF</div>
                        </div>
                        <div className="footer__menu">
                            <div className="menu__item">ADATKEZELÉSI NYILATKOZAT</div>
                            <div className="menu__item">IMPRESSZUM</div>
                            <div className="menu__item">KARRIER</div>
                            <div className="menu__item">BLOG</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}