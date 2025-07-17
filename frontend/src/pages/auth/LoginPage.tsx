import axios from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { loginApi } from "../../api/auth/auth.api";
import useAuthStore from "../../stores/useAuthStore";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthUser } = useAuthStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username) {
      toast.error("Username is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }

    try {
      const response = await loginApi(username, password);
      setUserName("");
      setPassword("");
      setAuthUser(response.data.account);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred during signup.");
        }
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue to-blue">
      <h1 className="text-4xl text-white font-semibold mb-6 animate__animated animate__fadeIn">
        Login
      </h1>
      <div className="h-auto w-full max-w-lg bg-white rounded-lg shadow-xl p-8 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-black">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="py-3 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue transition-all duration-200"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-black">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-3 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="w-full flex items-center justify-center mt-6">
              <button
                type="submit"
                className="w-full bg-blue text-white py-3 rounded-lg hover:bg-red transition duration-200 ease-in-out"
              >
                Login
              </button>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/register" className="text-blue hover:underline">
              Don’t have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
