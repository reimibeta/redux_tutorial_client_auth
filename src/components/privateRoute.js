import React, { useContext, createContext, useState } from "react";
import {
    Route,
    Navigate,
  } from "react-router-dom";

function useAuth() {
    return useContext(authContext);
}

const authContext = createContext();

export function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
        {...rest}
        render={({ location }) =>
            auth.user ? (
            children
            ) : (
            <Navigate
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
}