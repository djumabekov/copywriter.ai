import { Outlet } from "react-router-dom";
import { Header } from "../HeaderComponent";
import { Footer } from "../FooterComponent";

export const Layout = () => {
    return (
        <>

            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}