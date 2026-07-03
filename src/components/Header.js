import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;