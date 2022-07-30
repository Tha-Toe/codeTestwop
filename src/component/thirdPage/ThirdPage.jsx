import React from "react";
import "./thirdPage.css";
const ThirdPage = () => {
    return(
        <main className="thirdPageContainer">
        <section className="leftThirdPageContainer">
            <form className="leftThirdPageChild">
                <div className="leftThirdPageHeadContainer">
                    <div className="leftThirdPageHead">Step 2 of 5</div>
                    <div className="leftThirdProgressContainer">
                        <div className="leftThirdProgressChild"></div>
                    </div>
                </div>
                <div className="lspHeader">Enter Your Full Name</div>
                <div className="thirdInputLabel">FIRST NAME</div>
                <input placeholder="Type here..." className="thirdInputTag"/>
                <div className="thirdInputLabel">LAST NAME</div>
                <input placeholder="Type here..." className="thirdInputTag"/>
                <div className="thirdButtonContainer">
                    <button className="backButtonThird">Back</button>
                    <button className="continueButtonThird">Continue</button>
                </div>
            </form>
        </section>
        <section className="rightThirdPageContainer">
            <div className="rightThirdHead">IMPORTANT</div>
            <img src="/personalCard.png " alt="" className="personalCard" />
            <div className="rightThirdTag">Make sure this info matches your driver's lincense.</div>
            <div className="rightThirdEssential">This is essential for our user verification process.</div>
        </section>
    </main>
    )
}

export default ThirdPage;