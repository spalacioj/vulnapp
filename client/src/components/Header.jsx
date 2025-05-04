import '../assets/styles/Header.css';
import { Link } from "react-router";
import { useNavigate } from "react-router";

function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const isAdmin = user && user.role === 'admin';

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <header className="blog-header">
            <h1>blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAdmin && <li><Link to="/administration">Admin Panel</Link></li>}
                    {user ? (
                        <li><a href="" onClick={handleLogout}>Logout</a></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );  
}

export default Header;