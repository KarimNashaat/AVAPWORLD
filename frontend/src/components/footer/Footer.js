import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        {/* <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Front-end development</a></li>
                                <li><a href="#">Back-end development</a></li>
                            </ul>
                        </div> */}
                        <div class="col-sm-19 col-md-3 item">
                            <h3 className="text-white">About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-9 item text">
                            <h3 className="text-white">Company Name</h3>
                            <p>AVAPWORLD</p>
                        </div>
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-linkedin"></i></a><a href="#"><i class="icon ion-social-whatsapp"></i></a></div>
                    </div>
                    <p class="copyright">Copyright © 2022 AVAPWORLD. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer 