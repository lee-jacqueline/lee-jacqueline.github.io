import React, { Component } from 'react';
import '../App.css';

class Profile extends Component {
    render() {
        return (
            <div class="container position-relative" id="portfolio">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 position-absolute">
                        <div class="text-center filter-btns">
                            <ul class="nav nav-pills">
                                <li role="presentation">
                                    <a href="javascript:void(0)" id="all" class="btn" data-mixitup-control data-filter="all">All</a>
                                </li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" class="btn" data-mixitup-control data-filter=".web">Web</a>
                                </li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" class="btn" data-mixitup-control data-filter=".android">Android</a>
                                </li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" class="btn" data-mixitup-control data-filter=".ios">iOS</a>
                                </li>
                                <li role="presentation">
                                    <a href="javascript:void(0)" class="btn" data-mixitup-control data-filter=".desktop">Desktop</a>
                                </li>
                            </ul>
                        </div>
                        <div class="row" id="mix-wrapper">
                            <div id="effect-5">
                                <div class="col-md-4 col-sm-6 col-xs-6 mix-target android" data-order="3">
                                    <figure>
                                        <img src="images/portfolio/port1.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}
  
export default Profile;