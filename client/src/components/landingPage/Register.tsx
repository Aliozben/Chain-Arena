import React, {FormEvent, useState} from "react";
import "../../css/landingPage/Register.css";
import Button from "@material-ui/core/Button";
import Axios, {AxiosError, AxiosResponse} from "axios";
import {TextInput} from "../common/TextInput";
import {useToasts} from "react-toast-notifications";
interface Props {}

const Register = (props: Props) => {
  // Axios.defaults.baseURL = "";
  const [status, setStatus] = useState("asdasd");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword2] = useState("");

  const {addToast} = useToasts();
  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    password != password2
      ? addToast("Passwords didn't match.", {appearance: "error"})
      : Axios.post("https://chainarena.herokuapp.com/api/users/register", {
          username,
          password,
          displayName,
          email,
        })
          .then((res: AxiosResponse) => {
            addToast("User succesfully has been created.", {
              appearance: "success",
            });
          })
          .catch((err: AxiosError) => {
            addToast(err.response?.data, {appearance: "error"});
          });
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister} className="form">
        <TextInput placeHolder="E-mail" onChange={setEmail} />
        <TextInput placeHolder="Username" onChange={setUsername} />
        <TextInput
          placeHolder="Password"
          inputType="password"
          onChange={setPassword}
        />
        <TextInput
          placeHolder="Password Again ~.~"
          inputType="password"
          onChange={setPassword2}
        />
        <TextInput placeHolder="Display Name" onChange={setDisplayName} />
        <Button type="submit" className="register_button">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
