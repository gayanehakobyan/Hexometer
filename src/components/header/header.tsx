import * as React from "react";
import {Link} from "gatsby";

// @ts-ignore
import LogoSvg from "../../images/svg/hexometer.svg";
import MenuNav from "./menu/menuNav";
import "./header.css";

const Header = () =>
{


    return (
        <header className="section-container">
          <div className="header-section">
            <div className= "big-container">
                <Link to="/" className="logo">
                    <LogoSvg/>
                </Link>
                <MenuNav />
              <a className="software_banner_btn d-none d-md-block header_registration_btn" href="/#registration">Get Started
                for Free</a>
              <a className="header_login_btn" href="/#login">Login</a>
            </div>
          </div>
        </header>
    );
};

export default Header;
