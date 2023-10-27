import TableRowDesktop from "./tableRow/TableRow";

const TableDesktop = ({ boxsData }) => {
  return (
    <table className="mx-auto w-10/12 overflow-hidden rounded text-right">
      <thead>
        <tr className="bg-gray-900 text-white">
          <th className="rounded-tl"></th>
          <th>אינפורמציה נוספת</th>
          <th>גובה ארגז</th>
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
            <TableRowDesktop key={boxData._id} boxData={boxData} />
          ))
        ) : (
          <TableRowDesktop />
        )}
      </tbody>
    </table>
  );
};

export default TableDesktop;
