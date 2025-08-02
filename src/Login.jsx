import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = localStorage.getItem(phone);

        if (!storedUser) {
            alert("User not found. Please register first.");
            return;
        }

        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.password === password) {
            alert("Login successful!");
            navigate("/dashboard");
        } else {
            alert("Incorrect password. Try again.");
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mb-4 px-4 py-2 border rounded"
                maxLength={10}
                minLength={10}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border rounded"
                required
            />

            <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded"
            >
                Login
            </button>
        </form>
    );
};

export default Login;