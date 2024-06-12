import { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/images/logolatte.jpg';

export class Navbar extends Component {
    state = {
        isOpen: false,
    };

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div className="p-2 flex bg-[#00171a] justify-between fixed top-0 left-0 z-50 w-screen h-[10vh] md:shadow-md shadow-sm">
                <Link to="/">
                    <div className="flex">
                        <img className="h-10 w-10 pt-1" src={logo} alt="" />
                        <h1 className="text-1xl mt-1 text-white p-2">LATTE KOREA</h1>
                    </div>
                </Link>

                <div className="block md:hidden mt-2">
                    <button onClick={this.toggleMenu}>
                        {this.state.isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
                    </button>
                </div>

                <ul className={`list-none flex-col md:flex-row flex mt-3 gap-2 absolute md:static bg-[#00171a] w-full md:w-auto transition-transform duration-300 ease-in ${this.state.isOpen ? 'top-[10vh]' : 'top-[-100vh]'} md:top-auto md:flex`}>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/" onClick={this.toggleMenu}>Home</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/about" onClick={this.toggleMenu}>About</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/menu" onClick={this.toggleMenu}>Menu</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/booking" onClick={this.toggleMenu}>Booking</Link>
                    </li>
                    <li className="mr-2 text-[15px] text-white hover:text-green-400">
                        <Link to="/contact" onClick={this.toggleMenu}>Contact</Link>
                    </li>
                </ul>

                <button className="text-[16px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 hover:text-tertiary rounded-[7px] mx-3 px-6 py-1.5 hidden md:block">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>
        );
    }
}
