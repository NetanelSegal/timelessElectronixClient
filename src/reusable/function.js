export const getPositionFromNum = (index, maxIndex, fromTop) => {
    if (fromTop) {
        if (index == 0) return "עליון"
        return `${index} מלמעלה`
    }

    const middle = maxIndex / 2

    if (index == 0) return "ימני"

    if (index > 0 && index < middle) return `${index} מימין`

    if (index == middle) return "אמצעי"


    if (index > middle && index < maxIndex) return `${maxIndex - index} משמאל`

    if (index == maxIndex) return "שמאלי"


}
