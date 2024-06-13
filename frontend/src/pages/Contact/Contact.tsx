import { Component } from "react";

export class Contact extends Component {
    render() {
        return (
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-4">
                <div className="mb-8 flex flex-col justify-center items-center p-6 text-center">
                    <h5 className="font-bold text-4xl mb-3">Contact Us</h5>
                    <p className="text-xl uppercase font-light mb-6">Please fill in the form below</p>
                </div>
                <form className="w-full max-w-md flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="fullname" className="mb-2">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="John de Silva"
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@gmail.com"
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2">Message</label>
                        <textarea
                            id="message"
                            placeholder="Type your message here..."
                            className="p-2 border border-gray-300 rounded h-32"
                        />
                    </div>
                    <button className="bg-green-700 p-3 text-white font-bold rounded hover:bg-green-800 transition duration-300" type="submit">
                        Send
                    </button>
                </form>
            </section>
        );
    }
}
