import { useState } from "react";
import Icon from "../../../icon/Icon";
import {
  copyBoxData,
  getBlockPosition,
  getColPosition,
  getNumFromTopPosition,
} from "../../tableRowFunctions.js";

const TableRowDesktop = ({ boxData }) => {
  if (!boxData) {
    return (
      <tr className="odd:bg-white even:bg-gray-100">
        <td className="text-center group-last:rounded-bl">
          <div className="flex flex-wrap justify-center">
            <Icon iconName={"delete"} />
            <Icon iconName={"edit"} />
            <Icon iconName={"copy"} />
          </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  const [isCopied, setIsCopied] = useState();

  const copyTooltip = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const {
    extraInfo,
    numFromTop,
    columnFromRight,
    areaInWarehouse,
    blockFromRight,
    level,
    isInsideRow,
    boxNumber,
    maxColNum,
    maxBoxNumFromTop,
  } = boxData;

  return (
    <tr className="odd:bg-white even:bg-gray-100">
      <td className="text-center group-last:rounded-bl">
        <div className="flex flex-wrap justify-center">
          <button>
            <Icon iconName={"delete"} />
          </button>
          <button>
            <Icon iconName={"edit"} />
          </button>
          <button
            className="relative"
            onClick={() => {
              copyTooltip();
              copyBoxData(boxData);
            }}
          >
            {isCopied && (
              <span className="absolute left-full w-36 rounded bg-slate-600 py-1 text-sm text-white">
                Copied to clipboard
              </span>
            )}
            <Icon iconName={"copy"} />
          </button>
        </div>
      </td>
      <td>{extraInfo}</td>
      <td>{getNumFromTopPosition(maxBoxNumFromTop, numFromTop)}</td>
      <td>{getColPosition(maxColNum, columnFromRight)}</td>
      <td>{getBlockPosition(areaInWarehouse, blockFromRight)}</td>
      <td>{level == 0 ? "קרקע" : level}</td>
      <td>{isInsideRow ? "פנימית" : "חיצונית"}</td>
      <td>{areaInWarehouse}</td>
      <td>{boxNumber}</td>
    </tr>
  );
};

export default TableRowDesktop;
