import useAuthStore from "../stores/useAuthStore";

const HomePage = () => {
  const { logoutUser } = useAuthStore();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue to-blue">
      <h1 className="text-4xl text-white font-semibold mb-6 animate__animated animate__fadeIn">
        Home Page
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <button
          className="bg-white text-blue px-6 py-3 rounded-lg shadow-md transition duration-200 ease-in-out"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
