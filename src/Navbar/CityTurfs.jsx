import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import turfsData from '../DATA/turf';
// Link to custom CSS for styling

const CityTurfs = () => {
    const { cityName } = useParams();  // Get the city name from the URL
    const [turfs, setTurfs] = useState([]);
    const navigate = useNavigate();

    // Fetch turfs based on the city
    useEffect(() => {
        const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
        if (turfsData[formattedCityName]) {
            setTurfs(turfsData[formattedCityName]);
        } else {
            setTurfs([]);  // Handle case where no turfs are found
        }
    }, [cityName]);

    const handleTurfClick = (turfId) => {
        navigate(`/TurfInfo/${turfId}`);  // Navigate to TurfInfo page with turfId
    };

    return (
        <div className="turfs-page">
            <div className="container py-5">
                <h1 className="text-center mb-5">{cityName.charAt(0).toUpperCase() + cityName.slice(1)} Turfs</h1>
                <div className="row">
                    {turfs.length > 0 ? (
                        turfs.map((turf, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div 
                                    className="card turf-card shadow-lg" 
                                    onClick={() => handleTurfClick(turf.id)}
                                >
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{turf.name}</h5>
                                        <p className="card-text">{turf.address}</p>
                                        <button className="btn btn-primary book-btn">Book Now</button>
                                    </div>
                                    <img src={turf.img} className="card-img-top" alt={turf.name} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p className="text-center text-muted">Sorry, no turfs available in {cityName}.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CityTurfs;
