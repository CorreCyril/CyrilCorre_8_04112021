import React from "react";
import Logo from "./média/LOGOFooter.png";
import "./styles/Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <img alt="logo" src={Logo} className="logo" />
                <p className="copyrights">
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        );
    }
};

export default Footer;