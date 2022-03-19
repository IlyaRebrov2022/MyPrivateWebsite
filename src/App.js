import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Cap from "./Components/Main/Wardrobe/Caps/Cap";

const App = () => {
    return (
        <div className="app-wrapper">

            <Header/>

            <Footer/>
            <div className="main-content">
                <Cap/>
                {/*<Main/>*/}
            </div>


        </div>
    );
}

export default App;
