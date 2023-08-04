import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">Home</Link>
            </div>
        </nav>
    );
}

export default Navbar;