export const getPositionFromNum = (index, maxIndex) => {

    const middle = maxIndex / 2

    if (index == 0) return "ראשון"

    if (index > 0 && index < middle) return index

    if (index == middle) return "אמצעי"

    if (index > middle && index < maxIndex) return maxIndex - index

    if (index == maxIndex) return "אחרון"


}
