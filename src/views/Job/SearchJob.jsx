import { useState, useEffect } from "react";
import { Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const options = [
    { value: "chocolate", label: "Hà Nội" },
    { value: "strawberry", label: "Hồ Chí Minh" },
    { value: "vanilla", label: "Đà Nẵng" },
];

export default function SearchJob() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    
    return (
        <div className="flex gap-2 w-full px-4">
            <Input
                className="w-full rounded-sm"
                placeholder="Tên công việc, vị trí bạn muốn ứng tuyển"
            />
            <Select
                showSearch
                className="min-w-[230px] font-sans rounded-sm"
                size="large"
                placeholder="Tất cả ngành nghề"
                filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                }
                onChange={handleChange}
                options={options}
            />
            <Select
                showSearch
                className="min-w-[230px] font-sans rounded-sm"
                size="large"
                placeholder="Tất cả tỉnh/thành phố"
                filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                }
                onChange={handleChange}
                options={options}
                dropdownRender={(menu) => (
                    <div style={{ backgroundColor: "white" }}>{menu}</div>
                )}
            />
            <Button
                type="primary"
                size="large"
                className="w-[156px]"
                icon={<SearchOutlined />}
            >
                Tìm kiếm
            </Button>
        </div>
    );
}
