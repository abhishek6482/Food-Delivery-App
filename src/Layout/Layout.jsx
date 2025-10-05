import { Outlet } from "react-router-dom";
import { Footer } from "../Nav/Footer";
import { Header } from "../Nav/Header";


 function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export { Layout };
