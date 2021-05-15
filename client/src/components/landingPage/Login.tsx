import React, {FormEvent, useState} from "react";
import Axios, {AxiosResponse, AxiosError} from "axios";
import {useToasts} from "react-toast-notifications";

import "../../css/landingPage/Login.css";

import {TextInput} from "../common/TextInput";
import AuthService from "../common/AuthService";

interface Props {
  loginWindow: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login = ({setLoggedIn, setLoginWindow, loginWindow}: Props) => {
  const authService = new AuthService();
  const {addToast} = useToasts();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await Axios.post("http://localhost:3002/api/users/login", {
      username,
      password,
    })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        addToast("Successfully logged in!", {appearance: "info"});
        authService.setToken(response.headers["auth-token"]);
        setLoggedIn(true);
        setLoginWindow(false);
      })
      .catch((error: AxiosError) => {
        const res = error.response;
        addToast(res?.data, {appearance: "warning"});
      });
  };

  return (
    <form
      className={loginWindow ? "login_popup popup_active" : "login_popup"}
      onSubmit={handleLogin}
    >
      <h1>Log In</h1>
      <TextInput placeHolder="Username" onChange={setUsername} />
      <TextInput
        placeHolder="Password"
        inputType="password"
        onChange={setPassword}
      />
      <div className="popup_buttonContainer">
        <div className="loginBut">
          <button type="submit">Login</button>
        </div>
        <div className="cancelBut">
          <button onClick={() => setLoginWindow(false)}>Cancel</button>
        </div>
      </div>
    </form>
  );
};
