import React, { useEffect } from "react";
import Icon from "../icon/Icon";
import { getPositionFromNum } from "../../reusable/function";

const TableRow = ({ boxData }) => {
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

  const {
    extraInfo,
    numFromTop,
    columnFromRight,
    areaInWarehouse,
    blockFromRight,
    level,
    isInsideRow,
    boxNumber,
  } = boxData;

  const getBlockPosition = (areaInWarehouse, index) => {
    if (areaInWarehouse == "כניסה") {
      return getPositionFromNum(index, 2);
    }

    if (areaInWarehouse == "פנימי") {
      return getPositionFromNum(index, 5);
    }
  };

  const copyBoxData = () => {
    let strCopy;
    if (areaInWarehouse == "פנימי" || areaInWarehouse == "כניסה") {
      strCopy = `
מס' ארגז: ${boxNumber}
אזור מחסן: ${areaInWarehouse}
בלוק: ${getBlockPosition(areaInWarehouse, blockFromRight)}
שורה: ${isInsideRow ? "פנימית" : "חיצונית"}
קומה: ${level == 0 ? "קרקע" : level}
עמודה מימין: ${columnFromRight}
ארגז מלמעלה:  ${numFromTop}
${extraInfo ? "אקסטרה: " + extraInfo : ""}`;
    } else {
      strCopy = `
מס' ארגז: ${boxNumber}
אזור מחסן: ${areaInWarehouse}
עמודה מימין: ${columnFromRight != undefined ? columnFromRight : ""}
ארגז מלמעלה: ${numFromTop != undefined ? numFromTop : ""}
${extraInfo != undefined ? "אקסטרה: " + extraInfo : ""}`;
    }

    navigator.clipboard.writeText(strCopy);
  };
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
          <button onClick={copyBoxData}>
            <Icon iconName={"copy"} />
          </button>
        </div>
      </td>
      <td>{extraInfo}</td>
      <td>{numFromTop}</td>
      <td>{columnFromRight}</td>
      <td>{getBlockPosition(areaInWarehouse, blockFromRight)}</td>
      <td>{level == 0 ? "קרקע" : level}</td>
      <td>{isInsideRow ? "פנימית" : "חיצונית"}</td>
      <td>{areaInWarehouse}</td>
      <td>{boxNumber}</td>
    </tr>
  );
};

export default TableRow;
