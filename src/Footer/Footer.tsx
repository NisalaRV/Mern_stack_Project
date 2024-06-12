import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FaEnvelope, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export class Footer extends Component {
    render() {
        return (
            <footer className="p-2 bg-[#444544] flex justify-center ">
                <div className="bg-backgroundColor text-white py-1 mt-1">
                    <div className="max-w-7xl mx-auto px-4">

                        <div className="mb-2 lg:mb-0 ml-[60px]">
                            <div className="flex  space-x-4  ">
                                <a href="#" className="text-white hover:text-white">
                                    <FaFacebook size={20}/>
                                </a>
                                <a href="#" className="text-white hover:text-white">
                                    <FaTwitter size={20}/>
                                </a>
                                <a href="#" className="text-white hover:text-white">
                                    <FaInstagram size={20}/>
                                </a>
                                <a href="#" className="text-white hover:text-white">
                                    <FaEnvelope size={20}/>
                                </a>

                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} Latte Korea. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
