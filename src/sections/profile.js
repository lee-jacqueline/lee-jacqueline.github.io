import React, { Component } from 'react';
import './App.css';

var ProfilePic = require('../../public/images/profile.jpg') ;

class Profile extends Component {
    render() {
        return (
            <div>
                <img src={ProfilePic} className = "margin-top-76 img-circle center-block profile_picture" alt="profile picture" />
                <h1 class="text-capitalize text-center">Jeanetter benson</h1>
                <h3 class="text-capitalize text-center">UX/UI designer</h3>
                <hr/>
                <div class="text-center margin-bottom-135">
                    <ul class="social-networks spin-icon">
                        <li><a href="https://www.facebook.com/" class="icon-facebook">Facebook</a></li>
                        <li><a href="https://twitter.com/" class="icon-twitter">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/" class="icon-linkedin">LinkedIn</a></li>
                        <li><a href="https://pinterest.com" class="icon-pinterest">Pinterest</a></li>
                        <li><a href="https://instagram.com" class="icon-instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
  
export default Profile;