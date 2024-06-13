import { Component } from "react";
import c1 from '../../assets/images/c1.png';

export class About extends Component {
    render() {
        return (
            <section className="w-full mt-12 px-4 md:px-12 lg:px-24">
                <div className="flex flex-col items-center gap-6">
                    <h5 className="font-bold mt-10 text-4xl">About</h5>
                    <p className="text-2xl uppercase font-light text-center">Enjoy Your Free Time</p>
                </div>
                <div className="flex flex-col lg:flex-row mt-5 gap-6">
                    <div className="flex-1">
                        <p className="text-left text-xl lg:text-1xl mb-4">Latte Korea is a Korean style cafe that serves simple, natural food – including Vegan and Gluten Free options – accompanied by authentic espresso coffee. The Latte Korea café is a hybrid combining a strong coffee culture and a robust food culture under one roof in a welcoming, cozy and comfortable neighborhood café.</p>
                        <p className="text-left text-xl lg:text-1xl mb-4">Our Coffee – We serve a range of espresso coffees made from the finest coffee beans, roasted right here in Cape Coral, and our baristas really know their beans. With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cuppa.</p>
                        <p className="text-left text-xl lg:text-1xl mb-4">Our Food – Our food is all natural, simple food made with local ingredients, wherever possible, to provide you with fresher, healthier and deliciously tasty meals. We have a well-stocked pastry cabinet, our food has an international flavor and we offer gluten free, vegetarian and vegan options.</p>
                        <p className="text-left text-xl lg:text-1xl mb-4">We also have a little attitude: Café YOU has a cool, trendy shabby chic decor and an upbeat fun atmosphere with a whole lot of colorful idioms:</p>
                        <p className="text-left text-xl lg:text-1xl mb-4">Coffee & sweet 🍵 Bobble tea 🥤 Sushi 🍣 foods 🍜 mocktails & ice tea</p>
                    </div>
                    <div className="flex-none">
                        <img src={c1} alt="img" className="w-full lg:w-[400px] lg:h-full rounded-r-2xl object-cover" />
                    </div>
                </div>
            </section>
        );
    }
}
