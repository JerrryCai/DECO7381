import { Link } from "react-router-dom";
import Header from "./navigation";


export default function Signup() {
    return (
        <div id="signup-page">
            <Link to="/"><img src="./LOGO-H 1.png" id="signup-logo"></img></Link>
            <div id="signup-texts">
                <h1 id="signup-title">We Solve Misinformation in The Best Way for People.</h1>
                <h3 id="signup-content">We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
                    It is definitely the tool you need to speed up your design process.</h3>
            </div>
            <div>
                <form id="sign-form">
                    <header id="sign-title">
                        <h1>Sign In</h1>
                        <h1>Sign up</h1>
                    </header>
                    <hr />

                    <div>
                        <label className="user-info">
                            <img src="./email-icon.png" />
                            <input type="text" name="email" placeholder="Your email..." />
                        </label>
                    </div>
                    <div>
                        <label className="user-info">
                        <img src="./user-icon.png" />
                            <input type="text" name="username" placeholder="Your username..." />
                        </label>
                    </div>
                    <div>
                        <label className="user-info">
                        <img src="./password-icon.png" />
                            <input type="password" name="password" placeholder="Your password..." />
                        </label>
                    </div>
                    <div id="sign-radio">
                        <input type="radio" value="Normal" name="identity" />Normal
                        <input type="radio" value="Professional" name="identity" />Professional
                    </div>
                    <div>
                        <label id="sign-condition">
                            <input type="checkbox" name="condition" />I agree to the terms of service
                        </label>
                    </div>
                    <div id="sign-btn">
                        <input type="submit" value="Create Account" />
                    </div>


                </form>
            </div>

        </div>
    )
}