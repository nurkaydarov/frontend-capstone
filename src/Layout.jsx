import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
        <Nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </Nav>
        <main>
        <Outlet />
        </main>
        
        <Footer/>
        </>
    )
}
export default Layout;