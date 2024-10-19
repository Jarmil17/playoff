import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CityDetails from "./Navbar/CityDetails"; // Create a CityDetails component
import CityTurfs from "./Navbar/CityTurfs";
import CommunityPage from './Navbar/CommunityPage'; // Import Community Page component
import Footer from './Navbar/Footer';
import Home from './Navbar/Home';
import Navbar from './Navbar/Navbar';
import TurfInfo from './Navbar/TurfInfo';
import TournamentPage from './Navbar/tournament';


function App() {
    return (
        <Router>
            <Navbar />
            <div className='content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CityDetails" element={<CityDetails />} />
                <Route path="/city/:cityName/turfs" element={<CityTurfs />} />
                {/* Route to Turf Info Page */}
                {/* Route for Turf Info, using URL parameters */}
                <Route path="/TurfInfo/:turfId" element={<TurfInfo />} />
                <Route path="/community" element={<CommunityPage />} />  {/* Community Page */}
                <Route path="/tournament" element={<TournamentPage/>} />
            </Routes>
            </div>
                <Footer />
        </Router>
    );
}

export default App;

{/*import React from 'react';




function App() {

    return (
        <>
            
        </>

    );
}
export default App;*/}
