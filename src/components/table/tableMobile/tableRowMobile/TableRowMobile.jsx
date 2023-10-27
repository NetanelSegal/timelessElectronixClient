import { useEffect, useState } from "react";
import Icon from "../../../icon/Icon";
import {
  copyBoxData,
  getBlockPosition,
  getColPosition,
  getNumFromTopPosition,
} from "../../tableRowFunctions.js";

const TableRowMobile = ({ boxData }) => {
  if (!boxData) {
    return (
      <>
        <tr>
          <td className="h-0.5 border-green-600 bg-green-600 p-0"></td>
          <td className="h-0.5 border-green-600 bg-green-600 p-0"></td>
        </tr>
        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">מס' ארגז</th>
        </tr>

        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">מיקום במחסן</th>
        </tr>

        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">שורה</th>
        </tr>

        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">קומה</th>
        </tr>
        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">בלוק</th>
        </tr>

        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">עמודה</th>
        </tr>

        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">גובה ארגז</th>
        </tr>

        <tr>
          <td></td>
          <th className="w-1/2 bg-slate-900 text-white">אינפורמציה נוספת</th>
        </tr>

        <tr>
          <td className="flex  flex-wrap justify-center">
            <button>
              <Icon iconName={"delete"} />
            </button>
            <button>
              <Icon iconName={"edit"} />
            </button>
            <button>
              <Icon iconName={"copy"} />
            </button>
          </td>
          <th className="w-1/2 bg-slate-900 text-white"></th>
        </tr>
      </>
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
    <>
      <tr>
        <td className="h-0.5 border-green-600 bg-green-600 p-0"></td>
        <td className="h-0.5 border-green-600 bg-green-600 p-0"></td>
      </tr>
      <tr>
        <td>{boxNumber}</td>
        <th className="w-1/2 bg-slate-900 text-white">מס' ארגז</th>
      </tr>

      <tr>
        <td>{areaInWarehouse}</td>
        <th className="w-1/2 bg-slate-900 text-white">מיקום במחסן</th>
      </tr>

      <tr>
        <td>{isInsideRow ? "פנימית" : "חיצונית"}</td>
        <th className="w-1/2 bg-slate-900 text-white">שורה</th>
      </tr>

      <tr>
        <td>{level == 0 ? "קרקע" : level}</td>
        <th className="w-1/2 bg-slate-900 text-white">קומה</th>
      </tr>
      <tr>
        <td>{getBlockPosition(areaInWarehouse, blockFromRight)}</td>
        <th className="w-1/2 bg-slate-900 text-white">בלוק</th>
      </tr>

      <tr>
        <td>{getColPosition(maxColNum, columnFromRight)}</td>
        <th className="w-1/2 bg-slate-900 text-white">עמודה</th>
      </tr>

      <tr>
        <td>{getNumFromTopPosition(maxBoxNumFromTop, numFromTop)}</td>
        <th className="w-1/2 bg-slate-900 text-white">גובה ארגז</th>
      </tr>

      <tr>
        <td>{extraInfo}</td>
        <th className="w-1/2 bg-slate-900 text-white">אינפורמציה נוספת</th>
      </tr>

      <tr>
        <td className="flex  flex-wrap justify-center">
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
        </td>
        <th className="w-1/2 bg-slate-900 text-white"></th>
      </tr>
    </>
  );
};

export default TableRowMobile;
