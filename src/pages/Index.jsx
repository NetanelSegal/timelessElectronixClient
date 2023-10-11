import React, { useEffect, useRef, useState } from "react";
import Table from "../components/table/Table";
import Icon from "../components/icon/Icon";
import urls from "../constant/urls";
import axios from "axios";

const Index = () => {
  const inpRef = useRef();
  const [inpBoxNum, setInpBoxNum] = useState("");
  const [boxsData, setBoxsData] = useState([]);

  const getBoxByNum = async () => {
    if (!inpBoxNum) {
      return console.log("empty input");
    }
    try {
      const { data } = await axios.get(urls.getBoxByNum + inpBoxNum);
      setBoxsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inpRef.current.value = "הכנס מספר ארגז";
  }, []);

  return (
    <>
      <div className="mx-auto my-3 flex w-fit gap-2">
        <button className="rounded bg-gray-900 p-3 text-white">
          העלאת ארגז
        </button>
        <div className=" flex w-60 rounded border-2 border-green-900">
          <input
            onChange={(e) => {
              setInpBoxNum(e.target.value);
            }}
            onClick={(e) => {
              e.target.select();
            }}
            ref={inpRef}
            className="h-full w-full p-3"
            type="text"
          />
          <button onClick={getBoxByNum} className="bg-green-900 text-white">
            <Icon iconName={"search"} />
          </button>
        </div>
      </div>

      <Table boxsData={boxsData} />
    </>
  );
};

export default Index;
