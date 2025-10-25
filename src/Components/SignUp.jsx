import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    setTimeout(() => {
      toast.success("Signup Successful!");
      navigate("/");
      setLoading(false);
    }, 1200);
  };

  const handleGoogleSignIn = () => {
    toast.success("Google Login Successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="bg-white text-green-600 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-5">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="font-semibold ">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border text-gray-500 rounded focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="w-full p-3 border rounded text-gray-500 rounded focus:ring-2 focus:ring-green-500"
              placeholder="Enter photo URL"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded text-gray-500 rounded focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border rounded text-gray-500 rounded focus:ring-2 focus:ring-green-500"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-4 font-medium text-gray-600">Or</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full border py-3 bg-black text-white rounded mt-3 hover:bg-gray-100 hover:text-green-700
           hover:text-lg transition font-semibold flex 
          items-center justify-center gap-2"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            className="h-10"
          />
          Sign in with Google
        </button>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
