import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/play">Play </Link>
            </div>
        </nav>
    );
}

export default Navbar;