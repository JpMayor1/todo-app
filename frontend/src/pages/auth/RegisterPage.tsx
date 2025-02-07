import { FormEvent, useState } from "react";
// import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../../api/auth/auth.api";
import toast from "react-hot-toast";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

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
      const response = await registerApi(username, password)
      toast.success(response.data.message)
      setUserName("")
      setPassword("")
      navigate("/login")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred during signup.');
        }
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-end bg-blue">
      <h1 className="text-3xl text-white mb-[50px]">Registration</h1>
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
                Register
              </button>
            </div>
          </form>
          <div className="w-full flex items-center justify-center">
          <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
