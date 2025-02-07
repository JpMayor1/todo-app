import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-end bg-blue">
      <h1 className="text-3xl text-white mb-[50px]">Login</h1>
      <div className="h-[80%] w-screen bg-white rounded-tr-[100px] rounded-tl-[100px] flex items-center">
        <div>
          <form
            onSubmit={handleSubmit}
            className="h-fit w-96 bg-slate-50 p-10 rounded-md"
          >
            <div className="flex flex-col">
              <label>Username:</label>
              <input
                type="text"
                placeholder="Username"
                className="py-3 px-3 rounded-md"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="py-3 px-3 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue text-white mt-3 px-4 py-2 rounded-md hover:bg-pink hover:text-black"
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-full flex items-center justify-center">
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
