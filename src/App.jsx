import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Index from "./pages/Index";
import SearchBox from "./pages/SearchBox";
import Register from "./pages/Register";
import UploadBox from "./pages/UploadBox";
import UserContext from "./context/userContext";
import AppContext from "./context/appContext";
import { useEffect, useState } from "react";
import Login from "./pages/Login";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <AppContext.Provider value={{ screenWidth, setScreenWidth }}>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="" element={<Index />} />
              <Route path="searchBox" element={<SearchBox />} />
              <Route path="uploadBox" element={<UploadBox />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
