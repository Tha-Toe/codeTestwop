import React from "react";
import "./fivePage.css";
const FivePage = () => {
    return(
        <main className="fivePageContainer">
        <section className="leftFivePageContainer">
            <form className="leftFivePageChild">
                <div className="leftFivePageHeadContainer">
                    <div className="leftFivePageHead">Step 4 of 5</div>
                    <div className="leftFiveProgressContainer">
                        <div className="leftFiveProgressChild"></div>
                    </div>
                </div>
                <div className="lspHeader">Enter Your Address</div>
                <div className="lspSmallHeader">To play in contests, we're required to verify your location.</div>
                <div className="fiveInputLabel">PHYSICAL ADDRESS</div>
                <input placeholder="Enter a location" className="fiveInputTag"/>
                <div className="warningAddress">INVALID ADDRESS</div>
                <div className="fiveButtonContainer">
                    <button className="backButtonFive">Back</button>
                    <button className="continueButtonFive">Continue</button>
                </div>
            </form>
        </section>
        <section className="rightFivePageContainer">
            <div className="rightFiveHead">IMPORTANT</div>
            <img src="/personalCard.png " alt="" className="personalCard" />
            <div className="rightFiveTag">Make sure this info matches your driver's lincense.</div>
            <div className="rightFiveEssential">This is essential for our user verification process.</div>
        </section>
    </main>
    )
}

export default FivePage;