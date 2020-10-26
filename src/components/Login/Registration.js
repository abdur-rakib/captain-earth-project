import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Registration(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    // FORM VALIDATION FUNCTION
    const checkForm = () => {
        if (formEmpty()) {
            setError('You have to fill all fields.');
            return false;
        } else if (checkPassword()) {
            setError('Password shoud be matched.');
            return false;
        }
        return true;
    }

    // CHECK FOR EMPTY INPUT FIELDS
    const formEmpty = () => {
        return !username ||
            !email ||
            !password ||
            !confirmPassword;
    }

    // CHECK FOR PASSWORD MATCHING
    const checkPassword = () => {
        return password !== confirmPassword
    }

    //SAVE USER TO DATABASE
    const saveUsers = createdUser => {

    }

    //REGISTRATION LOGIC
    const register = event => {
        event.preventDefault();

        if (checkForm()) {
        }
    }

    return (
        <>
            <form>
                <h2>Star your journey</h2>
                {/* input div for username */}
                <div className="input_div">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="inputDiv">
                        <input
                            type="text"
                            className="input"
                            placeholder="Username"
                            value={username}
                            onChange={event => { setUsername(event.target.value) }}
                        />
                    </div>
                </div>

                {/* input div for email */}
                <div className="input_div">
                    <div className="i">
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="inputDiv">
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                </div>

                {/* input div for password */}
                <div className="input_div">
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="inputDiv">
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                </div>

                {/* input div for confirm password */}
                <div className="input_div">
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="inputDiv">
                        <input
                            type="password"
                            className="input"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={event => setConfirmPassword(event.target.value)}
                        />
                    </div>
                </div>

                <small className="textError">{error}</small>
                {
                    !loading
                        ? <button className="btn__submit" onClick={register}>Sign up</button>
                        : <button className="btn__submit" style={{ background: "#ccc" }}>Loading..</button>
                }
                <div className="signup__link">
                    Already Have an account? <span className="stateChange" onClick={props.stateChange}>Login here</span>
                </div>

            </form>
        </>
    )
}

export default Registration
