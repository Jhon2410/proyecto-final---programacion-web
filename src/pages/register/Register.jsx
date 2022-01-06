import { Link } from "react-router-dom"
import GoogleButton from "../componentes/GoogleButton";
import "./../../App.css";
import "./style.css";

export default function Register(){

  
    return(
        <>
        <div className="container"> 
    <div className="card">
        <div className="parent">
            <div className="top-div"> <img src="https://imgur.com/3U0Yawd.png" alt="as" />
                <h3>Eden</h3>
            </div>
            <ul className="progress-bar">
                <li className="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className="main active">
            <div className="content">
                <h4>Welcome! First things first...</h4>
                <p>You can always change them later.</p>
            </div>
            <div className="input-text"> <input type="text" placeholder="Steve Jobs" id="full-name" required /> <span>Full Name</span> </div>
            <div className="input-text"> <input type="text" placeholder="Steve" /> <span>Display Name</span> </div>
            <div className="button"> <button className="create-workspace">Create Workspace</button> </div>
        </div>
        <div className="main">
            <div className="content">
                <h4>Let's set up a home for all your work</h4>
                <p>You can always create another workspace later.</p>
            </div>
            <div className="input-text"> <input type="text" placeholder="Eden" required /> <span>Workspace Name</span> </div>
            <div className="input-text"> <input type="text" placeholder="Example : https://www.google.com/" /> <span>Workspace URL(optional)</span> </div>
            <div className="button button_gap"> <button className="back-click">Back</button> <button className="next-click">Next</button> </div>
        </div>
        <div className="main">
            <div className="content">
                <h4>How are you planning to use Eden?</h4>
                <p>We'll stream line your setup accordingly.</p>
            </div>
            <div className="radio-text"> <input type="radio" name="Select" id="radio-button-1" /> <input type="radio" name="Select" id="radio-button-2" /> <label htmlFor="radio-button-1" className="radio-button-1"> <i className="fa fa-user"></i>
                    <h5>For Myself</h5>
                    <p>Write better.Think more clearly.Stay organized.</p>
                </label> <label htmlFor="radio-button-2" className="radio-button-2"> <i className="fa fa-users"></i>
                    <h5>With my team</h5>
                    <p>Wikis,docs,tasks and projects all in one space.</p>
                </label> </div>
            <div className="button button_gap1"> <button className="back-click">Back</button> <button className="finish-click">Finish</button> </div>
        </div>
        <div className="main"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /> </svg>
            <div className="content">
                <h2>Congratulations! <span id="shown_name"></span></h2>
                <p>You have completed onboarding,you can start using the Eden!</p>
            </div>
            <div className="button launch"> <button>Launch Eden</button> </div>
        </div>
    </div>
    <GoogleButton />
    <Link to="/login"></Link>
    </div>
        </>
    )
}
