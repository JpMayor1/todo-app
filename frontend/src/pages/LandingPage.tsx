import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue to-blue">
      <h1 className="text-4xl text-white font-semibold mb-6 animate__animated animate__fadeIn">
        Welcome to Our App
      </h1>
      <div className="flex space-x-4 mt-4">
        <Link
          className="bg-white text-blue px-6 py-3 rounded-lg shadow-md hover:bg-red transition duration-200 ease-in-out"
          to={"/login"}
        >
          Login
        </Link>
        <Link
          className="bg-white text-blue px-6 py-3 rounded-lg shadow-md hover:bg-red transition duration-200 ease-in-out"
          to={"/register"}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
