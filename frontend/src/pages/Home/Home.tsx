import React from 'react';
import latteImage from '../../assets/images/latte.jpg';
import {Link} from "react-router-dom"; // Assuming correct image path

const Home: React.FC = () => {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${latteImage})` }} // Use url() for background image
        >
            <div className="flex items-center justify-center h-full">
                <div className="text-center text-white p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-2xl sm:text-5xl md:text-6xl font-serif">
                        Welcome Latte Korea
                    </h1>
                    <h3 className="text-lg sm:text-3xl md:text-4xl font-serif mt-4">
                        FRESH & TASTY MEALS
                    </h3>
                    <p className="text-sm sm:text-lg md:text-xl font-thin mt-4">
                        Gathering Place For The Tastiest Foods, Coffee & Sweet, Boba Tea, Live Music.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center">
                        <button className="text-sm sm:text-lg md:text-xl text-[#e6f0e6] border border-white rounded py-3 px-6 mx-2 hover:text-tertiary transition-colors duration-300">

                            <Link to="/menu"> Check Menu</Link>
                        </button>
                        <button className="text-sm sm:text-lg md:text-xl text-[#e6f0e6] border border-white rounded py-3 px-6 mx-2 hover:text-tertiary transition-colors duration-300">

                            <Link to="/booking"> Book Table</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
