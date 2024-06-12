import React, { Component } from "react";
import { products } from "../../assets/data/data";
import { Link } from "react-router-dom";
import carts from "../../assets/icon/icons8-cart-50.png";

export class Menu extends Component {
    render() {
        return (
            <>
                <div className="flex flex-1 mb-1 justify-start items-center flex-col gap-5">
                    <h5 className="font-bold mt-9 text-white text-4xl sm:text-3xl md:text-5xl">Menu</h5>
                    <p className="text-xl uppercase font-serif text-amber-950 font-light sm:text-lg md:text-2xl">
                        Choose your favorite
                    </p>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-white shadow-lg rounded-lg p-5">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div>
                                            <h3 className="text-sm text-gray-700">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                        </div>
                                        <Link to="/overview">
                                            <img className="h-7 w-7" src={carts} alt="cart icon" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
