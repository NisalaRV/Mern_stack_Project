import React, {Component,  ChangeEvent, FormEvent, } from 'react';
import menlistu from "../../assets/images/menlistu.jpg";

interface RegisterFormData {
    fullName: string;
    username: string;
    email: string;
    phone: string;
    nic: string;
    password: string;
    confirmPassword: string;
}

class RegisterForm extends Component<{}, RegisterFormData> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName: '',
            username: '',
            email: '',
            phone: '',
            nic: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleChange(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        this.setState((prevState) => ({ ...prevState, [name]: value }));
    }

    handleSubmit(e: FormEvent): void {
        e.preventDefault();
        console.log('Registration form submitted:', this.state);
    }

    render() {
        // let handleChange;
        return (
            <section id="/register"
                className=" w-full h-screen mt-12 bg-cover bg-center"
                style={{backgroundImage: `url(${menlistu})`}}
            >
                <div className="flex flex-1  mb-1 justify-start items-center flex-col gap-5">
                    <h5 className="font-bold mt-9 text-white text-4xl">Register</h5>
                    <p className="text-xl uppercase  font-serif text-amber-950 font-light">fill Form</p>
                </div>
                <form className="flex mx-auto w-[550px] bg-black bg-opacity-50" onSubmit={this.handleSubmit}>
                    <div className="flex-col w-1/2 p-4 text-white">


                        <div className="mb-4 ">
                            <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="username">
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="email">
                                Phone:
                            </label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex-col w-1/2 p-4 text-white">
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="nic">
                                NIC:
                            </label>
                            <input
                                type="text"
                                id="nic"
                                name="nic"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2" htmlFor="confirmPassword">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full p-2 border rounded text-black"
                                required
                            />
                        </div>

                        <div className="flex justify-self-center">
                            <button type="submit"
                                    className="bg-green-400 text-white py-2 px-4 ml-8  mt-7  w-[180px] rounded hover:bg-green-700">
                                Register Now
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
};

export default RegisterForm;
