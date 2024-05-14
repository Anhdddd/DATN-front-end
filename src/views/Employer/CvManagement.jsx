import { LuTrash2 } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { Input, Button, Select } from "antd";
import { useState, useEffect } from "react";

const options = [
    { value: "chocolate", label: "Hà Nội" },
    { value: "strawberry", label: "Hồ Chí Minh" },
    { value: "vanilla", label: "Đà Nẵng" },
];

export default function CvManagement() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <section className="flex flex-col gap-4 w-full p-5">
            <div className="flex gap-4 bg-white">
                <Input
                    className="w-full rounded-sm"
                    placeholder="Tên công việc, vị trí bạn muốn ứng tuyển"
                />
                <Select
                    showSearch
                    className="min-w-[230px] font-sans rounded-sm"
                    placeholder="Tin đăng"
                    filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                    }
                    onChange={handleChange}
                    options={options}
                />
                <Button type="primary" className="w-[200px] font-medium text-sm rounded-lg">
                    Tìm kiếm
                </Button>
            </div>
            <table className="w-full rounded border shadow-sm">
                <thead className="bg-[#EEF0F3] rounded-t-lg border-b">
                    <tr className="text-sm text-gray-600">
                        <th className="font-semibold text-left px-3 py-2 border-r">
                            Họ và tên
                        </th>
                        <th className="font-semibold text-left px-3 py-2 border-r border-l">
                            Tin đăng
                        </th>
                        <th className="font-semibold text-left px-3 py-2 border-r border-l">
                            Thời gian nộp
                        </th>
                        <th className="font-semibold text-left px-3 py-2 border-r border-l">
                            Trạng thái
                        </th>
                        <th className="font-semibold  py-2 border-l"></th>
                    </tr>
                </thead>
                <tbody className="text-sm text-[#1D293D] bg-white">
                    <tr className="border-b cursor-default hover:bg-gray-100">
                        <td className="px-3 py-4 border-r">Nguyễn Văn A</td>
                        <td className="px-3 py-4 border-r">
                            Senior Frontend Developer
                        </td>
                        <td className="px-3 py-4 border-r">20/10/2021</td>
                        <td className="px-3 py-4 border-r">Chưa xem</td>
                        <td className="px-3 py-4 border-r flex gap-2 justify-center">
                            <button className="p-1.5 rounded-full transition-all bg-red-100 hover:bg-red-500 group">
                                <LuTrash2 className="w-4 h-4 text-red-500 group-hover:text-white" />
                            </button>
                            <button className="p-1.5 rounded-full transition-all bg-green-100 hover:bg-green-500 group">
                                <GoPencil className="w-4 h-4 text-green-500 group-hover:text-white" />
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-100">
                        <td className="px-3 py-4 border-r">Nguyễn Văn B</td>
                        <td className="px-3 py-4 border-r">
                            Senior Backend Developer
                        </td>
                        <td className="px-3 py-4 border-r">21/10/2021</td>
                        <td className="px-3 py-4 border-r">Đã xem</td>
                        <td className="px-3 py-4 border-r flex gap-2 justify-center">
                            <button className="p-1.5 rounded-full transition-all bg-red-100 hover:bg-red-500 group">
                                <LuTrash2 className="w-4 h-4 text-red-500 group-hover:text-white" />
                            </button>
                            <button className="p-1.5 rounded-full transition-all bg-green-100 hover:bg-green-500 group">
                                <GoPencil className="w-4 h-4 text-green-500 group-hover:text-white" />
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-100">
                        <td className="px-3 py-4 border-r">Nguyễn Văn A</td>
                        <td className="px-3 py-4 border-r">
                            Senior Frontend Developer
                        </td>
                        <td className="px-3 py-4 border-r">20/10/2021</td>
                        <td className="px-3 py-4 border-r">Chưa xem</td>
                        <td className="px-3 py-4 border-r flex gap-2 justify-center">
                            <button className="p-1.5 rounded-full transition-all bg-red-100 hover:bg-red-500 group">
                                <LuTrash2 className="w-4 h-4 text-red-500 group-hover:text-white" />
                            </button>
                            <button className="p-1.5 rounded-full transition-all bg-green-100 hover:bg-green-500 group">
                                <GoPencil className="w-4 h-4 text-green-500 group-hover:text-white" />
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-100">
                        <td className="px-3 py-4 border-r">Nguyễn Văn B</td>
                        <td className="px-3 py-4 border-r">
                            Senior Backend Developer
                        </td>
                        <td className="px-3 py-4 border-r">21/10/2021</td>
                        <td className="px-3 py-4 border-r">Đã xem</td>
                        <td className="px-3 py-4 border-r flex gap-2 justify-center">
                            <button className="p-1.5 rounded-full transition-all bg-red-100 hover:bg-red-500 group">
                                <LuTrash2 className="w-4 h-4 text-red-500 group-hover:text-white" />
                            </button>
                            <button className="p-1.5 rounded-full transition-all bg-green-100 hover:bg-green-500 group">
                                <GoPencil className="w-4 h-4 text-green-500 group-hover:text-white" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
