import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import TableDesktop from "./tableDesktop/TableDesktop";
import TableMobile from "./tableMobile/TableMobile";
const Table = ({ boxsData }) => {
  const { screenWidth } = useContext(AppContext);
  const isMobile = screenWidth <= 768;

  return isMobile ? (
    <TableMobile boxsData={boxsData} />
  ) : (
    <TableDesktop boxsData={boxsData} />
  );
};

export default Table;
