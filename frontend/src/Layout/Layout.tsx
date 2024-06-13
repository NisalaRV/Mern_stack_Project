import {BrowserRouter} from "react-router-dom";
import {render} from "@testing-library/react";
import {Navbar} from "../Navbar/Navbar";
import DefaultLayout from "../DefaultLayout/DefaultLayout";
import {Footer} from "../Footer/Footer";

export const Layout = () => {

        return (
            <>
                    <div className="container mx-auto">
                            <Navbar/>
                            <DefaultLayout/>
                            <Footer/>
                    </div>


            </>
        );

};
