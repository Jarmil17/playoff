import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import turfsData from '../DATA/turf';

// Simulated turf data


const CityTurfs = () => {
    const { cityName } = useParams();  // Get the city name from the URL
    const [turfs, setTurfs] = useState([]);
    const navigate = useNavigate();

    // Fetch turfs based on the city
    useEffect(() => {
        // Normalize the cityName (capitalize the first letter)
        const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

        // Check if the city exists in turfsData
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
        <div className="container my-5">
            <h1>{cityName} Turfs</h1>
            <div className="row">
                {turfs.length > 0 ? (
                    turfs.map((turf, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card"onClick={() => handleTurfClick(turf.id)} style={{ cursor: 'pointer' }}>
                                <img src={turf.img} className="card-img-top" alt={turf.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{turf.name}</h5>
                                    <p className="card-text">{turf.address}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No turfs available for {cityName}.</p>
                )}
            </div>
        </div>
    );
};

export default CityTurfs;
