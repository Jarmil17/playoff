import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cities from "../DATA/city"; // Import the city data


const CityDetails = () => {
    const { cityName } = useParams();  // Get the cityName from the route parameters
    const [cityDetails, setCityDetails] = useState(null);

    useEffect(() => {
        // Simulating fetching data based on the cityName from the params
        const cityData = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
        
        if (cityData) {
            setCityDetails(cityData);
        }
    }, [cityName]);

    if (!cityDetails) {
        return <div>Loading...</div>;  // Show a loading message until the city details are loaded
    }
    return (
        <div className="container my-5">
            <h1>{cityName} Details</h1>
            {/* Display more information about the city */}
            <img src={cityDetails.image} alt={cityDetails.name} className="img-fluid" />
            <p>Here you can add more detailed information about {cityName}.</p>
        </div>
    );
};

export default CityDetails;
