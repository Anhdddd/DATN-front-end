function checkOverlap(timeBreaks) {
    // Chuyển đổi thời gian thành phút để so sánh dễ dàng hơn
    let breaksInMinutes = timeBreaks.map(b => {
        let start = parseInt(b.startTime.hour) * 60 + parseInt(b.startTime.minute);
        let end = parseInt(b.endTime.hour) * 60 + parseInt(b.endTime.minute);
        // Nếu thời gian kết thúc nhỏ hơn thời gian bắt đầu, thì thêm 24 giờ (1440 phút) vào thời gian kết thúc
        if (end < start) {
            end += 24 * 60;
        }
        return { start, end };
    });

    // Sắp xếp các khoảng thời gian theo thời gian bắt đầu
    breaksInMinutes.sort((a, b) => a.start - b.start);
    console.log(breaksInMinutes)
    for (let i = 0; i < breaksInMinutes.length - 1; i++) {
        // Nếu thời gian kết thúc của khoảng thời gian hiện tại lớn hơn thời gian bắt đầu của khoảng thời gian tiếp theo
        // hoặc thời gian bắt đầu của khoảng thời gian hiện tại bằng thời gian bắt đầu của khoảng thời gian tiếp theo
        // thì có sự chồng chéo
        if (breaksInMinutes[i].end > breaksInMinutes[i + 1].start || breaksInMinutes[i].start === breaksInMinutes[i + 1].start) {
            return true;
        }
    }

    return false;
}