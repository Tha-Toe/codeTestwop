import React from "react";
import "./firstPage.css";
const FirstPage = () => {
    return(
        <main className="firstPageContainer">
            <section className="leftFirstPageContainer">
                <img src="/prizePicksLogo.jpg" className="pplLogo"/>
                <form className="firstFormContainer">
                    <h1 className="firstHead">Log In</h1>
                    <div className="firstInputLabel">EMAIL</div>
                    <input placeholder="Type here..." className="firstInputTag"/>
                    <div className="firstInputLabel">PASSWORD</div>
                    <input placeholder="Type here..." className="firstInputTag"/>
                    <a className="forgotLink">FORGOT PASSWORD?</a>
                    <button className="firstPageLoginButton" type="button">Log In</button>
                    <div className="firstPageSignUpButtonContainer">
                        <div className="firstPageSignUpHead">NEW TO PRIZEPICKS?</div>
                        <button className="firstPageSignUpButton" type="button">Sign Up</button>
                    </div>
                </form>
            </section>
            <section className="rightFirstPageContainer">
                <div className="rightStatusHead">DAILY FANTASY,</div>
                <div className="rightStatusHead">SIMPLIFIED.</div>
                <div className="rightStatusAmount">4.8 Stars Across 15,000+ Reviews</div>
            </section>
        </main>
    )
}
export default FirstPage;