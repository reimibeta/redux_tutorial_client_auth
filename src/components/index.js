import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Header from "./Header";
import Welcome from "./Welcome";

const Components = () => {
    return(
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feature" element={<Feature />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Components;