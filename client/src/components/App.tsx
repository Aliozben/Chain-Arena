import React, {useEffect, useState, useContext, createContext} from "react";
import {ThemeProvider} from "@material-ui/core";
import {BrowserRouter, Switch} from "react-router-dom";
import Axios, {AxiosError, AxiosResponse} from "axios";

import "../css/App.css";
import {theme} from "../theme";

import Navbar from "./navBar/Navbar";
import SocialMedia from "./socialMedia/SocialMedia";
import LandingPage from "./landingPage/LandingPage";
import AuthService from "./common/AuthService";
import {PrivateRoute} from "./common/PrivateRoute";
import {AUTH, DATABASE} from "../constants/index";
import {TextInput} from "./common/TextInput";

export const LogedContext = createContext<any>(null);

const App = () => {
  const authService = new AuthService();
  Axios.defaults.headers.common[AUTH.TOKEN_NAME] = authService.getToken();
  Axios.defaults.baseURL = DATABASE.BASE_URL;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = authService.getToken();
    Axios.get("http://localhost:3002/api/users/isAuth", {
      headers: {Aut: token},
    })
      .then((res: AxiosResponse) => {
        setLoggedIn(true);
      })
      .catch((err: AxiosError) => console.log(err.response));
  }, []);
  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <ThemeProvider theme={theme}>
        <div className="app">
          <Switch>
            <LogedContext.Provider value={setLoggedIn}>
              <PrivateRoute
                redirectPath="/social"
                isAuth={!loggedIn}
                exact
                path="/"
                component={LandingPage}
              />
              <PrivateRoute
                redirectPath="/"
                isAuth={loggedIn}
                exact
                path="/social"
                component={SocialMedia}
              />
            </LogedContext.Provider>
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
