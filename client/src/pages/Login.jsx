import '../assets/styles/Login.css'
import { NavLink } from "react-router";
import { useState } from 'react';
import { useNavigate } from "react-router";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            const user = data.user;

            localStorage.setItem('user', JSON.stringify({ id: user.user_id, username: user.username, role: user.role }));

            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }  

    return(
        <div className="login-wrapper">
            <div className="login-container">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Username' onChange={(e) => {setUsername(e.target.value)}}/>
                    <input type="password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
                    <button type="submit">Login</button>
                    <p className="signup-text">
                        Don't have an account? <span><NavLink to="/signup" end>Sign up</NavLink></span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login