import React from 'react';
import './FooterAuth.scss';

const FooterAuth = () => {
  return (
    <div className="footer-auth__wrapper">
        <div className="footer__top">
            <ul className="footer__containt">
                <li className="footer__list"><a href="#" className="footer_link">Meta</a></li>
                <li className="footer__list"><a href="#" className="footer_link">About</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Blog</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Jobs</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Help</a></li>
                <li className="footer__list"><a href="#" className="footer_link">API</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Privacy</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Terms</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Top Accounts</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Hashtags</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Locations</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Instagram Lite</a></li>
                <li className="footer__list"><a href="#" className="footer_link">Contact Uploading & Non-Users</a></li>
            </ul>
        </div>
        <div className="footer__bottom">
            <select name="" id="" className="language__select">
                <option value="English">English</option>
                <option value="Bangla">Bangla</option>
                <option value="Hindi">Hindi</option>
                <option value="Kuria">Kuria</option>
                <option value="Portugij">Portugij</option>
                <option value="Arabic">Arabic</option>
            </select>
            <p className="copyright__text">© 2022 Instagram from Meta</p>
        </div>
    </div>
  )
};

export default FooterAuth;