import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bp from "./images/bp.jpeg";
import "./style.css";

function Signin() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  function handleSignin() {
    setemailError("");
    setpasswordError("");

    let valid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setemailError("Please enter email");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setemailError("Please enter valid email");
      valid = false;
    }

    if (password === "") {
      setpasswordError("Please enter password");
      valid = false;
    }

    if (!valid) {
      return;
    }

    axios
      .post("https://netflix-7gja.onrender.com/signin", {
        username: email,
        password: password,
      })

      .then(function (res) {
        if (res.data.success) {
          navigate("/dashboard");
        } else {
          setpasswordError("Invalid email or password");
        }
      });
  }

  return (
    <div className="container">
      <h1 className="logo">NETFLIX</h1>
      <img className="img" src={bp} alt="pic" />

      <div className="container-2">
        <p>Sign In</p>
        <input
          className="email"
          placeholder="Email or Phone number"
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <p className="error">{emailError}</p>
        <input
          className="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <p className="error">{passwordError}</p>
        <button className="button" onClick={handleSignin}>
          Sign In
        </button>

        <div className="login-help">
          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <p className="help">Need help?</p>
        </div>

        <div className="new">
          <p>New to Netflix?Sign up now.</p>
        </div>

        <div className="learnmore">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="/"> Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signin;
