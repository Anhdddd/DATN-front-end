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

[
    {
        "id": "10c1ab10-ba7a-4309-b650-cabd3ab2205f",
        "employees": [
            {
                "id": "f105ad34-9f0a-42f0-90f0-225fe83c3b75",
                "first_name": "Nam",
                "last_name": "Nguyen",
                "middle_name": "Thu",
                "employee_code": "000008",
                "shifts": [
                    {
                        "id": "0aa93f1b-51af-4b86-bd15-eea5dfa13c63",
                        "date": "2024-05-16",
                        "shift_status": "CONFIRMED",
                        "shift_type": "GENERAL",
                        "shift_pattern": {
                            "id": "41c03c6e-e1d3-409a-a0f9-374e26da73cf",
                            "name": "TNT",
                            "abbreviation": "Tk",
                            "color": "#8F4EC8",
                            "end_time_working_type": "SAME_DATE",
                            "time_working": {
                                "start_time": "03:00:00.000000",
                                "end_time": "10:30:00.000000"
                            },
                            "break_time_type": "SPECIFY_TIME",
                            "break_times": [
                                {
                                    "start_time": "04:00:00.000000",
                                    "end_time": "05:00:00.000000"
                                }
                            ],
                            "break_time_lengths": []
                        }
                    }
                ]
            },
            {
                "id": "1493d985-62ee-4f28-9979-368fe9b34ce6",
                "first_name": "asd",
                "last_name": "asd",
                "middle_name": "",
                "employee_code": "000030",
                "shifts": [
                    {
                        "id": "8742482d-c447-41eb-ba97-e31b9264ea6b",
                        "date": "2024-05-16",
                        "shift_status": "CONFIRMED",
                        "shift_type": "GENERAL",
                        "shift_pattern": {
                            "id": "41c03c6e-e1d3-409a-a0f9-374e26da73cf",
                            "name": "TNT",
                            "abbreviation": "Tk",
                            "color": "#8F4EC8",
                            "end_time_working_type": "SAME_DATE",
                            "time_working": {
                                "start_time": "03:00:00.000000",
                                "end_time": "10:30:00.000000"
                            },
                            "break_time_type": "SPECIFY_TIME",
                            "break_times": [
                                {
                                    "start_time": "04:00:00.000000",
                                    "end_time": "05:00:00.000000"
                                }
                            ],
                            "break_time_lengths": []
                        }
                    }
                ]
            },
            {
                "id": "3f1ad021-385b-4a1e-830b-13c937e58273",
                "first_name": "2ee",
                "last_name": "awda",
                "middle_name": "",
                "employee_code": "000033",
                "shifts": [
                    {
                        "id": "f717c7aa-df7b-4d77-964c-ca6f517cc4a7",
                        "date": "2024-05-16",
                        "shift_status": "DRAFT",
                        "shift_type": "GENERAL",
                        "shift_pattern": {
                            "id": "41c03c6e-e1d3-409a-a0f9-374e26da73cf",
                            "name": "TNT",
                            "abbreviation": "Tk",
                            "color": "#8F4EC8",
                            "end_time_working_type": "SAME_DATE",
                            "shift_pattern_type": "SHIFT_PATTERN",
                            "time_working": {
                                "start_time": "03:00",
                                "end_time": "10:30"
                            },
                            "break_time_type": "SPECIFY_TIME",
                            "break_times": [
                                {
                                    "start_time": "04:00",
                                    "end_time": "05:00"
                                }
                            ],
                            "break_time_lengths": []
                        }
                    }
                ]
            },
            {
                "id": "8b9eb130-b555-4edb-85e9-39d16e44fe8d",
                "first_name": "ewdsa",
                "last_name": "asdasd",
                "middle_name": "",
                "employee_code": "000029",
                "shifts": [
                    {
                        "id": "223ec021-49e6-4eac-b52c-f54bfe857ae8",
                        "date": "2024-05-16",
                        "shift_status": "DRAFT",
                        "shift_type": "GENERAL",
                        "shift_pattern": {
                            "id": "41c03c6e-e1d3-409a-a0f9-374e26da73cf",
                            "name": "TNT",
                            "abbreviation": "Tk",
                            "color": "#8F4EC8",
                            "end_time_working_type": "SAME_DATE",
                            "shift_pattern_type": "SHIFT_PATTERN",
                            "time_working": {
                                "start_time": "03:00",
                                "end_time": "10:30"
                            },
                            "break_time_type": "SPECIFY_TIME",
                            "break_times": [
                                {
                                    "start_time": "04:00",
                                    "end_time": "05:00"
                                }
                            ],
                            "break_time_lengths": []
                        }
                    }
                ]
            }
        ]
    }
]