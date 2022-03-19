import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Cap from "./Components/Main/Wardrobe/Caps/Cap";
import {BrowserRouter, Routes , Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Footer/>

                <div className="main-content">
                    <Routes>
                    <Route path="/main" element={<Main/>} />
                    <Route path="/caps" element={<Cap/>} />
                    </Routes>
                </div>

            </div>
        </BrowserRouter>)
}

export default App;
