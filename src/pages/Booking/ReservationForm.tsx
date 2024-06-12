import React, { useState, ChangeEvent, FormEvent } from 'react';
import booking from "../../assets/images/booking.jpg";
import {Link} from "react-router-dom";

interface ReservationFormData {
    name: string;
    email: string;
    numOfPeople: string;
    date: string;
    time: string;
    phoneNumber: string;
    message: string;
}

const ReservationForm: React.FC = () => {
    const [formData, setFormData] = useState<ReservationFormData>({
        name: '',
        email: '',
        numOfPeople: '',
        date: '',
        time: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleTableBooking = (e: FormEvent) => {
        e.preventDefault();
        console.log('Table booking requested:', formData);
    };

    return (
        <div className="w-full mt-12">
            <section
                className="w-full h-screen bg-cover bg-center relative flex justify-center items-center"
                style={{ backgroundImage: `url(${booking})` }}
            >
                <div className="absolute flex flex-col justify-center items-center p-6 bg-black bg-opacity-50 text-white w-full">
                    <h5 className="font-bold text-4xl mb-3">Reservation</h5>
                    <p className="text-xl uppercase font-light mb-6">Book A Table</p>

                    <form className="w-full max-w-4xl flex flex-wrap justify-center" onSubmit={handleTableBooking}>
                        <div className="w-full md:w-1/3 p-4 sm:w-full">
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Your Name:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Email:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Your Message:
                                    <textarea
                                        className="w-full text-black p-2 border rounded"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Date:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Time:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Phone Number:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Number Of People:
                                    <input
                                        className="w-full text-black p-2 border rounded"
                                        type="number"
                                        name="numOfPeople"
                                        value={formData.numOfPeople}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-full bg-green-400  text-white p-2 rounded"
                                type="submit"
                            >

                                <Link to="/register">     Book a Table</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ReservationForm;
