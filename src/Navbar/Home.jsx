import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Navbar/App.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const cities = [
        { name: "Ahmedabad", img: "./card.svg" },
        { name: "Delhi", img: "./delhi.svg" },
        { name: "Mumbai", img: "./mumbai.svg" },
        { name: "Chennai", img: "./chennai.jpg" },
        { name: "Bengaluru", img: "./bangalore.jpg" },
        { name: "surat", img: "./surat.jpg" }
    ];

    // Filter cities based on the search term
    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to handle card click and navigate to city details
    const handleCardClick = (cityName) => {
        navigate(`/city/${cityName.toLowerCase()}/turfs`);  // Pass the city name in lowercase if you normalize it in CityTurfs
    };

    return (
        <>
            {/* Full-width Image */}
            <div className="container-fluid" style={{ padding: '0px', marginTop: '0px', top: '79px' }}>
                <img src="./Designer.svg" alt="Cricket" className="w-100 img-fluid" />
            </div>
            <div className='container-fluid'><div
            className="container-fluid d-flex align-items-center justify-content-center text-center col "
            style={{
                maxWidth: '100%',        // Set width to 1133px
                height: '350px',        // Set height to 688px
                
                backgroundPosition: 'center',  // Center the image
                backgroundRepeat: 'no-repeat', // Prevent tiling of the image
                color: '#fff',
                textAlign: 'center'
            }}
        >
            <div className="overlay" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
                padding: '50px',
                borderRadius: '10px'
            }}>
                {/* Minimal Info Section */}
                <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Book Your Cricket Turf</h1>
                <p className="mb-4" style={{ fontSize: '1.2rem' }}>
                    Experience seamless cricket turf booking with real-time availability. Choose your city, find your turf, and book in minutes.
                </p>
                
                {/* Call to Action Button */}
                <button className="btn btn-success btn-lg" style={{ padding: '10px 30px', borderRadius: '30px' }}>
                    Start Booking
                </button>
            </div>
        </div></div>
            {/* Background Image Wrapper */}
            <div className="background-image">
                {/* Title and Search Bar */}
                <div className="container my-5" style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start', }}>
                    <h2>Select Your Preferred City</h2>
                    <div className="input-group w-50 my-3" style={{  }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search here..."
                            style={{ borderRadius: '20px 0 0 20px', padding: '10px 20px' }}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-primary" type="button" style={{ borderRadius: '0 20px 20px 0' }}>
                            <i className="bi bi-search"></i> {/* Bootstrap Search Icon */}
                        </button>
                    </div>
                </div>

                {/* City Cards Section */}
                <div className="container my-5" style={{borderRadius:'px'}}>
                    <div className="row">
                        {filteredCities.map((city, index) => (
                            <div key={index} className="col-md-4 mb-4 text-center" >
                                <div
                                    className="card"
                                    style={{ width: '18rem', cursor: 'pointer' }}
                                    onClick={() => handleCardClick(city.name)} // Navigate to city details on card click
                                >
                                    <img
                                        src={city.img}
                                        className="card-img-top"
                                        alt={city.name}
                                        style={{
                                            height: '200px',       // Set a fixed height for all images
                                            objectFit: 'cover'     // Ensures the image covers the whole space while maintaining aspect ratio
                                        }}
                                    />
                                    <div className="card-body">
                                        <p className="card-text">{city.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
