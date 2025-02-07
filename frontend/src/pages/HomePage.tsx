import useAuthStore from "../stores/useAuthStore";


const HomePage = () => {
  const { logoutUser } = useAuthStore()
  return <div>
    <h1>Home Page</h1>
    <button className="bg-pink px-4 py-2 rounded-md"
      onClick={logoutUser}
      >Logout</button>
  </div>;
};

export default HomePage;
