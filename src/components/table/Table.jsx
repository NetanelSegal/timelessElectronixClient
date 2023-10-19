import React, { useEffect } from "react";
import TableRow from "../tableRow/TableRow";

const Table = ({ boxsData }) => {
  return (
    <table className="mx-auto w-10/12 overflow-hidden rounded text-right">
      <thead>
        <tr className="bg-gray-900 text-white">
          <th className="rounded-tl"></th>
          <th>אינפורמציה נוספת</th>
          <th>ארגז מלמעלה</th>
          <th>עמודה</th>
          <th>בלוק</th>
          <th>קומה</th>
          <th>שורה</th>
          <th>מיקום במחסן</th>
          <th className="rounded-tr">מס' ארגז</th>
        </tr>
      </thead>
      <tbody>
        {boxsData.length > 0 ? (
          boxsData.map((boxData) => (
            <TableRow key={boxData._id} boxData={boxData} />
          ))
        ) : (
          <TableRow />
        )}
      </tbody>
    </table>
  );
};

export default Table;
