import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <div class="container-fluid sdm-bg row" id="home">
                <div class="overlay"></div>
                <ul class="nav nav-pills menu-center margin-top-30 scroll-nav">
                    <li role="presentation" class="active"><a href="#home"><i class="fa fa-home"></i></a></li>
                    <li role="presentation"><a href="#about_me">About</a></li>
                    <li role="presentation"><a href="#expertness">Skills</a></li>
                </ul> 
            </div>
        );
    }
}
    
export default NavBar;