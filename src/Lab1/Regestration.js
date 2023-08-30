import React, { useState } from "react";

function Registeration() {
  let [user, setUser] = useState({ username: "", email: "", password: "" });
  //let { username, password } = user;

  let emailValidator = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return "";
  };

  let passwordValidator = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum 8 characters";
    }
    return "";
  };

  let confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
      return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
      return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== user.password) {
      return "Passwords do not match";
    }
    return "";
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  let handleSubmit = (e) => {
    console.log(user);
  };
  return (
    <>
      {user.username}
      <br></br>
      Username:
      <input type="text" name="username" onChange={handleChange} />
      <br />
      Email:
      <input type="text" name="email" onChange={handleChange} />
      <br />
      Password:
      <input type="text" name="password" onChange={handleChange} />
      <br />
      Confirm Password:
      <input type="text" name="password" onChange={handleChange} />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Registeration;
