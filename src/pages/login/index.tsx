import useLogin from './useLogin';

const LoginPage = () => {
  const { handleFormLogin, setformData, formData } = useLogin();
  return (
    // <div>
    //   <input
    //     type="text"
    //     onChange={(e) => setformData({ ...formData, email: e.target.value })}
    //     placeholder="email"
    //   />
    //   <input
    //     type="password"
    //     onChange={(e) => setformData({ ...formData, password: e.target.value })}
    //     placeholder="password"
    //   />
    //   <button onClick={handleFormLogin}>Login</button>
    // </div>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form className="mt-6" onSubmit={(e) => { e.preventDefault(); handleFormLogin(); }}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-lg text-gray-800" htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setformData({ ...formData, email: e.target.value })}
              placeholder="email"
              className="border-2 border-gray-300 p-2 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-lg text-gray-800" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setformData({ ...formData, password: e.target.value })}
              placeholder="password"
              className="border-2 border-gray-300 p-2 rounded-lg text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


