import React, { Component } from 'react';
import '../App.css';

class AboutMe extends Component {
    render() {
        return (
            <div class="container row" id="about_me">
                <div class="col-md-10 col-md-offset-1 col-sm-12 row">
                    <div class="col-md-5 col-sm-4 col-xs-12 row">
                        <h3><i class="fa fa-user"></i>About me</h3>
                        <div class="block">
                            <p>
                                I am a passionate User Experience and User Interface Designer who has been working in this field for more than 3 years now. 
                            </p>
                            <p>
                                You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!
                            </p>                  
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-6">
                        <h3><i class="fa fa-building"></i>Work history</h3>
                        <div class="block">
                            <h4>Product Manager</h4>
                            <ul class="icon-list">
                                <li><i class="fa fa-building"></i> Dropbox</li>
                                <li><i class="fa fa-clock-o"></i> 2017-Present</li>
                            </ul>
                        </div> 
                        <div class="block">
                            <h4> Senior UX Designer</h4>
                            <ul class="icon-list">
                                <li><i class="fa fa-building"></i> Dropbox</li>
                                <li><i class="fa fa-clock-o"></i> 2017-Present</li>
                            </ul>
                        </div> 
                        <div class="block">
                            <h4>UX Design Intern</h4>
                            <ul class="icon-list">
                                <li><i class="fa fa-building"></i> Dropbox</li>
                                <li><i class="fa fa-clock-o"></i> 2017-Present</li>
                            </ul>
                        </div> 
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-6">
                        <h3><i class="fa fa-graduation-cap"></i>Education</h3>
                        <div class="block">
                            <h4>User experience Design</h4>
                            <ul class="icon-list">
                                <li><i class="fa fa-book"></i> University of Punjab</li>
                                <li><i class="fa fa-clock-o"></i> 2017-Present</li>
                            </ul>
                        </div> 
                        <div class="block">
                            <h4>User experience Design</h4>
                            <ul class="icon-list">
                                <li><i class="fa fa-book"></i> University of Punjab</li>
                                <li><i class="fa fa-clock-o"></i> 2017-Present</li>
                            </ul>
                        </div> 
                        <div class="block">
                            <h4>User experience Design</h4>
                            <ul class="icon-list">
                                <li><i class="fa fa-book"></i> University of Punjab</li>
                                <li><i class="fa fa-clock-o"></i> 2017-Present</li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}
    
export default AboutMe;