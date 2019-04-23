import React, { Component } from 'react';
import '../App.css';

var ProfilePic = require('../images/profile.jpg') ;

class Profile extends Component {
    render() {
        return (
            <div class="container-fluid sdm-bg row" id="home">
                <img src={ProfilePic} class="margin-top-76 img-circle center-block profile_picture" alt="profile" />
                <h1 class="text-capitalize text-center">Jacqueline Lee</h1>
                <h3 class="text-capitalize text-center">Aspiring Software Developer</h3>
                <hr/>
                <div class="text-center margin-bottom-135">
                    <ul class="social-networks spin-icon">
                        <li><a href="https://twitter.com/leejjjacq" class="icon-twitter">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/jacqlee33" class="icon-linkedin">LinkedIn</a></li>
                        <li><a href="https://www.pinterest.com.au/bunjournal/" class="icon-pinterest">Pinterest</a></li>
                        <li><a href="https://instagram.com/in/ljcqln" class="icon-instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
  
export default Profile;