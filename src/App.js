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
import MediumGrey from "./Components/Main/Wardrobe/Sweatshirt/MediumGrey/MediumGrey";
import MeltonBlue from "./Components/Main/Wardrobe/Sweatshirt/MeltonBlue/MeltonBlue";
import MediumGreyTshirt from "./Components/Main/Wardrobe/Tshirts/MediumGrey/MediumGreyTshirt";
import IvyGreenTshirt from "./Components/Main/Wardrobe/Tshirts/IvyGreen/IvyGreenTshirt";
import BlackTshirt from "./Components/Main/Wardrobe/Tshirts/Black/BlackTshirt";
import BrightWhiteTshirt from "./Components/Main/Wardrobe/Tshirts/BrightWhite/BrightWhiteTshirt";
import YourOrder from "./Components/Main/YourOrder/YourOrder";


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
                        <Route path="/MediumGreySweatshirt" element={<MediumGrey/>}/>
                        <Route path="/MeltonBlueSweatshirt" element={<MeltonBlue/>}/>
                        <Route path="/MediumGreyTshirt" element={<MediumGreyTshirt/>}/>
                        <Route path="/IvyGreenTshirt" element={<IvyGreenTshirt/>}/>
                        <Route path="/BlackTshirt" element={<BlackTshirt/>}/>
                        <Route path="/BrightWhiteTshirt" element={<BrightWhiteTshirt/>}/>
                        <Route path="/yourOrder" element={<YourOrder/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>)

}

export default App;
