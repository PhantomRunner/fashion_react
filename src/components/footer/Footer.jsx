import './Footer.css'

import facebook from './../../fashion-images/socials/fb.svg'
import instagram from './../../fashion-images/socials/inst.svg'
import twitter from './../../fashion-images/socials/tw.svg'
import linkedIn from './../../fashion-images/socials/in.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="left_block">
                    <div className="footer_title">Fashion</div>
                    <div className="footer_body">Complete your style with awesome<br/>clothes from us.</div>
                    <div className="footer_media">
                        <figure>
                            <img src={facebook}/>
                            <img src={instagram}/>
                            <img src={twitter}/>
                            <img src={linkedIn}/>

                        </figure>
                    </div>
                </div>
                <div className="right_block">
                    <div className="list_wrapper">
                        <ul>
                            <li className="list_title">Company</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>

                        <ul>
                            <li className="list_title">Quick Link</li>
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>

                        <ul>
                            <li className="list_title">Legal</li>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer;