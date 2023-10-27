export const getBlockPosition = (areaInWarehouse, index) => {
    if (!areaInWarehouse.includes("מידוף")) return;

    let maxIndex = areaInWarehouse == "מידוף כניסה" ? 1 : 4;
    const middle = maxIndex / 2;

    if (index == 0) return "ימני";
    else if (index == maxIndex) return "שמאלי";
    else if (index == middle) return "אמצעי";

    if (index > middle && index < maxIndex) {
        return `${maxIndex - index + 1} משמאל`;
    }

    return "מימין " + (index + 1);
};

export const getColPosition = (maxIndex, index) => {
    const middle = maxIndex / 2;

    if (index == 0) return "ראשונה";
    if (maxIndex == index) return "אחרונה";

    // if closer to left
    if (index > middle && index < maxIndex) {
        return `${maxIndex - index + 1} משמאל`;
    }

    return `${index + 1} מימין`;
};

export const getNumFromTopPosition = (maxIndex, index) => {
    const middle = maxIndex / 2;

    if (index == 0) return "עליון";
    if (maxIndex == index) return "תחתון";

    // if closer to left
    if (index > middle && index < maxIndex) {
        return `${maxIndex - index + 1} מלמטה`;
    }

    return `${index + 1} מלמעלה`;
};

export const copyBoxData = (boxData) => {
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
עמודה: ${columnFromRight != undefined
                ? getColPosition(maxColNum, columnFromRight)
                : ""
            }
גובה ארגז: ${numFromTop != undefined
                ? getNumFromTopPosition(maxBoxNumFromTop, numFromTop)
                : ""
            }
${extraInfo != undefined ? "אקסטרה: " + extraInfo : ""}`;
    }
    navigator.clipboard.writeText(strCopy);
};