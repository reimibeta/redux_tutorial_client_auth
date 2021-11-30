import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Header from "./Header";
import Welcome from "./Welcome";
// import history from "../history";

const Components = () => {
    // history={history} 
    return(
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feature" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Components;