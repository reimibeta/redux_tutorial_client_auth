import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Welcome from "./Welcome";

const Components = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Components;