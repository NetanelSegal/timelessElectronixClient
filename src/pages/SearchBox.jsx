import React, { useEffect, useRef, useState } from "react";
import Table from "../components/table/Table";
import urls from "../constant/urls";
import axios from "axios";

const SearchBox = () => {
  const inpRef = useRef();
  const [inpBoxNum, setInpBoxNum] = useState("");
  const [boxsData, setBoxsData] = useState([]);

  const getBoxByNum = async (e) => {
    e.preventDefault();
    if (!inpBoxNum) {
      return console.log("empty input");
    }
    try {
      const { data } = await axios.get(urls.getBoxByNum + inpBoxNum);
      setBoxsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inpRef.current.value = "הכנס מספר ארגז";
  }, []);

  return (
    <div id="page" className="text-center">
      <form
        className="searchBoxForm mx-auto mb-2 mt-6 w-full rounded-2xl border-2 border-green-600 pr-1 md:w-1/2 lg:w-1/3"
        onSubmit={getBoxByNum}
      >
        <input
          className="w-2/6 border-0 bg-green-600 text-white hover:scale-105 hover:bg-green-700 active:scale-95"
          type="submit"
          value="חיפוש"
        />
        <input
          dir="rtl"
          className="w-4/6 border-0 focus:outline-none"
          onChange={(e) => {
            setInpBoxNum(e.target.value);
          }}
          onClick={(e) => {
            e.target.select();
          }}
          ref={inpRef}
          type="text"
        />
      </form>

      <Table boxsData={boxsData} />
    </div>
  );
};

export default SearchBox;
