let timeBreaks = [
    {
        "startTime": {
            "hour": "22",
            "minute": "00"
        },
        "endTime": {
            "hour": "05",
            "minute": "01"
        }
    },
    {
        "startTime": {
            "hour": "05",
            "minute": "00"
        },
        "endTime": {
            "hour": "14",
            "minute": "01"
        }
    }
];

let inputBreak = {
    "startTime": {
        "hour": "04",
        "minute": "00"
    },
    "endTime": {
        "hour": "05",
        "minute": "01"
    }
};

function checkOverlap(timeBreaks, inputBreak) {
    function convertToMinutes(time) {
        let hours = parseInt(time.hour);
        let minutes = parseInt(time.minute);
        return hours * 60 + minutes;
    }

    let inputStart = convertToMinutes(inputBreak.startTime);
    let inputEnd = convertToMinutes(inputBreak.endTime);

    if (inputEnd < inputStart) {
        inputEnd += 24 * 60; // cộng thêm 24 giờ
    }

    for (let i = 0; i < timeBreaks.length; i++) {
        let breakStart = convertToMinutes(timeBreaks[i].startTime);
        let breakEnd = convertToMinutes(timeBreaks[i].endTime);

        if (breakEnd < breakStart) {
            breakEnd += 24 * 60; // cộng thêm 24 giờ
        }
        console.log(inputStart, inputEnd, ",,,,", breakStart, breakEnd )
        if (Math.max(inputStart, breakStart) < Math.min(inputEnd, breakEnd)) {
            return true; // có đoạn thời gian trùng nhau
        }
    }

    return false; // không có đoạn thời gian nào trùng nhau
}
let overlaps = checkOverlap(timeBreaks, inputBreak);
console.log(overlaps);

