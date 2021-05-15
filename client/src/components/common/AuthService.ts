import React from "react";
import Axios, {AxiosResponse, AxiosError} from "axios";

import {AUTH} from "../../constants/index";

interface Props {}

export default class AuthService {
  setToken(token: string) {
    localStorage.setItem(AUTH.TOKEN_NAME, token);
  }
  getToken() {
    return localStorage.getItem(AUTH.TOKEN_NAME);
  }
  logout() {
    localStorage.removeItem(AUTH.TOKEN_NAME);
  }
}
