import { Link } from "react-router-dom";

const Register = () => {
  const signup = (e) => {
    e.preventDefault();
    console.log("signup");
  };

  return (
    <div id="page">
      <h1 className="mt-[20vh] text-center  text-5xl font-bold">הרשם</h1>
      <form onSubmit={signup} className="m-auto w-full md:w-2/3 lg:w-1/2">
        <label htmlFor="email">
          Email
          <input className="mb-2 w-full" id="email" type="text" />
        </label>

        <label htmlFor="name">
          Name
          <input className="mb-2 w-full" id="name" type="text" />
        </label>

        <label htmlFor="password">
          Password
          <input className="mb-2 w-full" id="password" type="text" />
        </label>

        <input
          className="w-full rounded-xl bg-green-600 px-5 py-2 text-white hover:scale-105 hover:bg-green-700 active:scale-95"
          type="submit"
          value="הרשם"
        />
      </form>
      <Link to={"/login"}>
        <p dir="rtl" className="mt-1 text-center font-semibold underline">
          משתמש קיים
        </p>
      </Link>
    </div>
  );
};

export default Register;
