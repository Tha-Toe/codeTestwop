import React from "react";
import "./secondPage.css";

const SecondPage = () => {
    return(
        <main className="secondPageContainer">
            <section className="leftSecondPageContainer">
                <div className="secondHeadContainer">
                    <img src="/prizePicksLogo.jpg" alt="" className="pplLogo" />
                    <a className="haveAnAcc">Have an account?</a>
                </div>
                <form className="leftSecondPageChild">
                    <div className="leftSecondPageHeadContainer">
                        <div className="leftSecondPageHead">Step 1 of 5</div>
                        <div className="leftSecondProgressContainer">
                            <div className="leftSecondProgressChild"></div>
                        </div>
                    </div>
                    <div className="lspHeader">Enter Your Email</div>
                    <div className="lspSmallHeader">You'll use this to  log into your account.</div>
                    <div className="secondInputLabel">EMAIL</div>
                    <input placeholder="Type here..." className="secondInputTag"/>
                    <div className="secondInputLabel">PASSWORD</div>
                    <input placeholder="Type here..." className="secondInputTag"/>
                    <div className="secondButtonContainer">
                        <button className="backButtonSecond">Back</button>
                        <button className="continueButtonSecond">Continue</button>
                    </div>
                </form>
            </section>
            <section className="rightSecondPageContainer">
            <div className="rightStatusHead">DAILY FANTASY,</div>
                <div className="rightStatusHead">SIMPLIFIED.</div>
                <div className="rightStatusAmount">4.8 Stars Across 15,000+ Reviews</div>
            </section>
        </main>
    )
};
export default SecondPage;