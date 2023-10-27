import Icon from "../../icon/Icon";
import TableRowMobile from "./tableRowMobile/TableRowMobile";

const TableMobile = ({ boxsData }) => {
  return (
    <table
      width={"100%"}
      className="mx-auto overflow-hidden rounded text-right"
    >
      <tbody>
        {boxsData.length > 0 ? (
          boxsData.map((boxData) => (
            <TableRowMobile key={boxData._id} boxData={boxData} />
          ))
        ) : (
          <TableRowMobile />
        )}
      </tbody>
    </table>
  );
};

export default TableMobile;
