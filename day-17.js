//second task https://www.codewars.com/kata/training-js-number-26-methods-of-arrayobject-map/train/javascript


function isolateIt(arr) {
    const mapUsage = arr.map(function (stick) {
        const stickLength = stick.length;
        if (stickLength % 2 === 0) {
            return stick.slice(0, stickLength / 2) + '|' + stick.slice(stickLength / 2);
        } else {
            return stick.slice(0, stickLength / 2) + '|' + stick.slice(stickLength / 2 + 1);
        }
    });
    return mapUsage;
}

//third task  https://www.codewars.com/kata/training-js-number-27-methods-of-arrayobject-filter/train/javascript


function countGrade(scores) {
    return {
        S: scores.filter(x => x >= 100).length,
        A: scores.filter(x => x < 100 && x >= 90).length,
        B: scores.filter(x => x < 90 && x >= 80).length,
        C: scores.filter(x => x < 80 && x >= 60).length,
        D: scores.filter(x => x < 60 && x >= 0).length,
        X: scores.filter(x => x === -1).length
    }

}
