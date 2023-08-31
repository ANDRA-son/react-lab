import React, { useEffect, useState } from "react";

function Registeration() {
  let [user, setUser] = useState({ username: "", email: "", password: "" });
  let [confirmPassword, setConfirmPassword] = useState("");
  let [err, setErr] = useState("");
  let [err1, setErr1] = useState("");
  let [err2, setErr2] = useState("");
  //let { username, password } = user;
  useEffect(() => {
    if (user.email !== "") {
      setErr(emailValidator(user.email));
      //console.log(emailValidator(user.email));
    }
    if (user.password !== "") {
      setErr1(passwordValidator(user.password));
      //console.log(passwordValidator(user.password));
    }
    if (confirmPassword !== "") {
      setErr2(confirmPasswordValidator(confirmPassword, user.password));
      //console.log(confirmPasswordValidator(confirmPassword, user.password));
    }
  }, [user, confirmPassword]);

  let emailValidator = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return "valid Email";
  };

  let passwordValidator = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum 8 characters";
    }
    return "valid password";
  };

  let confirmPasswordValidator = (confirmPassword, pass) => {
    if (!confirmPassword) {
      return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
      return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== pass) {
      return "Passwords do not match";
    }
    return "Passwords is a match";
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
      {/* {user.username}
      <br></br> */}
      Username:
      <input type="text" name="username" onChange={handleChange} />
      <br />
      Email:
      <input type="text" name="email" onChange={handleChange} />
      {err === "" ? null : <br />}
      {err === "" ? null : err}
      <br />
      Password:
      <input type="text" name="password" onChange={handleChange} />
      {err1 === "" ? null : <br />}
      {err1 === "" ? null : err1}
      <br />
      Confirm Password:
      <input
        type="text"
        name="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {err2 === "" ? null : <br />}
      {err2 === "" ? null : err2}
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Registeration;
