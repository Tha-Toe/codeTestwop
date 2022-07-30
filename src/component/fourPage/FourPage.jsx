import React from "react";
import "./fourPage.css";
const FourPage = () => {
    return(
        <main className="fourPageContainer">
        <section className="leftFourPageContainer">
            <form className="leftFourPageChild">
                <div className="leftFourPageHeadContainer">
                    <div className="leftFourPageHead">Step 3 of 5</div>
                    <div className="leftFourProgressContainer">
                        <div className="leftFourProgressChild"></div>
                    </div>
                </div>
                <div className="lspHeader">Enter Your Date of Birth</div>
                <div className="lspSmallHeader">Let's check if you're old enough to play.</div>
                <div className="fourInputLabel">DATE OF BIRTH</div>
                <div className="fourDateContainer">
                <select id="month" className="month">
                    <option value="month" className="dateChild">Month</option>
                </select>
                <select id="day" className="day">
                    <option value="day" className="dateChild">Day</option>
                </select>
                <select id="year" className="month">
                    <option value="year" className="dateChild">Year</option>
                </select>
                </div>
                <div className="fourButtonContainer">
                    <button className="backButtonFour">Back</button>
                    <button className="continueButtonFour">Continue</button>
                </div>
            </form>
        </section>
        <section className="rightFourPageContainer">
            <div className="rightFourHead">IMPORTANT</div>
            <img src="/personalCard.png " alt="" className="personalCard" />
            <div className="rightFourTag">Make sure this info matches your driver's lincense.</div>
            <div className="rightFourEssential">This is essential for our user verification process.</div>
        </section>
    </main>
    )
}
export default FourPage;