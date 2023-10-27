import React, { useContext } from "react";
import UserContext from "../context/userContext";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const continueAsGuest = () => {
    setUserInfo({ guest: true });
    navigate("/searchBox");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div
      id="page"
      className="flex h-[80vh] flex-col items-center justify-center gap-6 text-center"
    >
      <h1 className="text-left text-5xl font-bold">
        <span className="text-sm font-semibold">
          Welcome to <br />
        </span>
        Timeless Electronix own stock
      </h1>
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <Button onClick={register} text={"התחברות\\הרשמה"} />
        <Button onClick={continueAsGuest} text={"המשך בתור אורח"} secondery />
      </div>
    </div>
  );
};

export default Index;
