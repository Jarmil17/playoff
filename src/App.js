import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CityDetails from "./Navbar/CityDetails"; // Create a CityDetails component
import CityTurfs from "./Navbar/CityTurfs";
import CommunityPage from './Navbar/CommunityPage'; // Import Community Page component
import Footer from './Navbar/Footer';
import Home from './Navbar/Home';
import Navbar from './Navbar/Navbar';
import Profile from './Navbar/profile';
import SlotBooking from './Navbar/slot-booking';
import TournamentPage from './Navbar/tournament';
import TurfInfo from './Navbar/TurfInfo';

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
                <Route path="/slot-booking" element={< SlotBooking />} />
                <Route path="/profile" element={<Profile />} />
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
