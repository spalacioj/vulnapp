import '../assets/styles/SignUp.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch('http://localhost:3000/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, role: "user" }) // hidden role
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Sign up failed');
            }

            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <h2>Sign Up</h2>
                {error && <p className="signup-error">{error}</p>}
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                    <p className="signup-login-text">
                        Already have an account? <span><NavLink to="/login">Log in</NavLink></span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
