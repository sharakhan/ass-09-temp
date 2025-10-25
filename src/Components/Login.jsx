import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake login check (replace with Firebase later)
    if (email === "user@example.com" && password === "123456") {
      toast.success("Login successful!");
      navigate("/home");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  const handleGoogleSignIn = () => {
    // Add Firebase Google Sign-in logic later
    toast.success("Signed in with Google!");
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-white text-green-600 p-8 rounded-2xl shadow-xl border border-green-100">
        <h2 className="text-3xl font-extrabold text-center text-green-600 mb-2">
          Log In
        </h2>
        <p className="text-center text-emerald-600 mb-6 text-sm">
          Login to continue your Qur'an learning journey
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-green-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-green-600 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="#"
              className="text-sm text-green-600 hover:underline hover:text-emerald-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-2xl text-white py-2 rounded-lg hover:bg-emerald-700 transition font-semibold"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-green-200" />
          <p className="text-sm text-gray-500">Or</p>
          <div className="flex-1 h-px bg-green-200" />
        </div>

        {/* Google Sign-in Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border py-3 bg-black text-white rounded mt-3 hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            className="h-10"
          />
          Sign in with Google
        </button>


        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
