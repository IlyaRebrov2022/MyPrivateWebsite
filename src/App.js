import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Cap from "./Components/Main/Wardrobe/Caps/Cap";
import Sweatshirt from "./Components/Main/Wardrobe/Sweatshirt/Sweatshirt";
import Tshirt from "./Components/Main/Wardrobe/Tshirts/Tshirt";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CapBeige from "./Components/Main/Wardrobe/Caps/CapBeige/CapBeige";
import CapNavy from "./Components/Main/Wardrobe/Caps/CapNavy/CapNavy";
import DesertCamou from "./Components/Main/Wardrobe/Caps/DesertCamou/DesertCamou";
import OrangeCamou from "./Components/Main/Wardrobe/Caps/OrangeCamou/OrangeCamou";
import AlaskanBrown from "./Components/Main/Wardrobe/Sweatshirt/AlaskanBrown/AlaskanBrown";
import BlackSweatshirt from "./Components/Main/Wardrobe/Sweatshirt/Black/BlackSweatshirt";


const App = () => {

    return (
        <div>

            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Footer/>
                    <Routes>
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/caps" element={<Cap/>}/>
                        <Route path="/sweatshirt" element={<Sweatshirt/>}/>
                        <Route path="/tshirts" element={<Tshirt/>}/>
                        <Route path="/DarkMiniumHat" element={<CapBeige/>}/>
                        <Route path="/TaupeHat" element={<CapNavy/>}/>
                        <Route path="/DesertCamouHat" element={<DesertCamou/>}/>
                        <Route path="/OrangeCamouHat" element={<OrangeCamou/>}/>
                        <Route path="/AlaskanBrownSweatshirt" element={<AlaskanBrown/>}/>
                        <Route path="/BlackSweatshirt" element={<BlackSweatshirt/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>)

}

export default App;
