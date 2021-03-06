import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Signout from "./components/auth/Signout";
import requireAuth from "./components/requireAuth";

const App = (props) => {
    // console.log(props.children)
    // const { isLoggedIn } = useSelector((state) => state.auth);
    // const isLoggedIn = false;

    // const routing = useRoutes(routes(isLoggedIn));
    return (
        <div>
            <Feature />
            {/* <BrowserRouter basename="/">
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/feature" element={<Feature />} />
                    <Route path="/signout" element={<Signout />} />
                </Routes>
            </BrowserRouter> */}
        </div>
    ); 
}
export default App;