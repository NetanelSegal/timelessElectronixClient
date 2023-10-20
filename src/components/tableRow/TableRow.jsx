import React, { useEffect, useState } from "react";
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

  const getBlockPosition = (areaInWarehouse, index) => {
    if (!areaInWarehouse.includes("מידוף")) return;

    let max;
    if (areaInWarehouse == "מידוף כניסה") max = 1;
    else if (areaInWarehouse == "מידוף פנימי") max = 4;

    const middle = max / 2;

    // if closer to left
    if (index > middle && index < max) {
      return "משמאל " + getPositionFromNum(index, max);
    }

    return "מימין " + getPositionFromNum(index, max);
  };

  const getColPosition = (max, index) => {
    const pos = getPositionFromNum(index, max);
    const middle = max / 2;

    if (pos == "ראשון") return "ראשונה";

    if (pos == "אחרון") return "אחרונה";

    // if closer to left
    if (index > middle && index < max) {
      return "משמאל " + getPositionFromNum(index, max);
    }

    return "מימין " + getPositionFromNum(index, max);
  };

  const getNumFromTopPosition = (max, index) => {
    const middle = max / 2;
    const pos = getPositionFromNum(index, max);

    if (typeof pos == "string") {
      if (pos == "אחרון") return "תחתון";
      if (pos == "ראשון") return "עליון";
      return pos;
    }

    // if closer to bottom
    if (index > middle && index < max) {
      return "מהתחתון " + getPositionFromNum(index, max);
    }

    return "מהעליון " + getPositionFromNum(index, max);
  };

  const copyBoxData = () => {
    let strCopy;
    if (areaInWarehouse.includes("מידוף")) {
      strCopy = `
מס' ארגז: ${boxNumber}
אזור מחסן: ${areaInWarehouse}
בלוק: ${getBlockPosition(areaInWarehouse, blockFromRight)}
שורה: ${isInsideRow ? "פנימית" : "חיצונית"}
קומה: ${level == 0 ? "קרקע" : level}
עמודה: ${getColPosition(maxColNum, columnFromRight)}
גובה ארגז: ${getNumFromTopPosition(maxBoxNumFromTop, numFromTop)}
${extraInfo ? "אקסטרה: " + extraInfo : ""}`;
    } else {
      strCopy = `
מס' ארגז: ${boxNumber}
אזור מחסן: ${areaInWarehouse}
עמודה: ${
        columnFromRight != undefined
          ? getColPosition(maxColNum, columnFromRight)
          : ""
      }
גובה ארגז: ${
        numFromTop != undefined
          ? getNumFromTopPosition(maxBoxNumFromTop, numFromTop)
          : ""
      }
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
          <button
            className="relative"
            onClick={() => {
              copyTooltip();
              copyBoxData();
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

export default TableRow;
