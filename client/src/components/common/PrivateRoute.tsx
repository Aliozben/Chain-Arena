import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";

export interface IPrivateRouteProps extends RouteProps {
  component: any;
  isAuth: boolean;
  redirectPath: string;
}

export const PrivateRoute = (props: IPrivateRouteProps) => {
  const {component: Component, isAuth, redirectPath, ...rest} = props;
  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: {from: routeProps.location},
            }}
          />
        )
      }
    />
  );
};
