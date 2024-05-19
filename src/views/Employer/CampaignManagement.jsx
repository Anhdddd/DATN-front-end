import { Input, Button, Select, Switch } from "antd";
export default function CampainManagement() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <section className="flex flex-col gap-4 w-full px-5">
            <div className="flex gap-3">
                <button className="text-[13px] font-semibold bg-[#00BF71] text-white px-4 py-1 rounded-2xl">
                    Tất cả
                </button>
                <button className="text-[13px] font-medium bg-gray-200 px-4 py-1 rounded-2xl">
                    Đang hiển thị
                </button>
                <button className="text-[13px] font-medium bg-gray-200 px-4 py-1 rounded-2xl">
                    Hết hạn hiển thị
                </button>
                <button className="text-[13px] font-medium bg-gray-200 px-4 py-1 rounded-2xl">
                    Đang xét duyệt
                </button>
                <button className="text-[13px] font-medium bg-gray-200 px-4 py-1 rounded-2xl">
                    Bị từ chối
                </button>
            </div>
            <div className="flex gap-4 bg-white">
                <Input
                    className="w-full rounded-sm h-10"
                    placeholder="Tên công việc, vị trí bạn muốn ứng tuyển"
                />

                <Button
                    type="primary"
                    size="large"
                    className="w-[200px] font-medium text-sm rounded-sm"
                >
                    Tìm kiếm
                </Button>
            </div>

            <table className="bg-white border w-full">
                <thead>
                    <tr className="text-sm border-b">
                        <th
                            className="text-left px-3 py-2 border-r font-normal"
                            style={{ width: "11%" }}
                        >
                            Hiển thị
                        </th>
                        <th
                            className="font-normal text-left px-3 py-2 border-r"
                            style={{ width: "35%" }}
                        >
                            Tên chiến dịch
                        </th>
                        <th
                            className="font-normal text-left px-3 py-2 border-r border-l"
                            style={{ width: "20%" }}
                        >
                            Số lượng ứng tuyển
                        </th>
                        <th
                            className="font-normal text-left px-3 py-2 border-r border-l"
                            style={{ width: "10%" }}
                        >
                            Lượt xem
                        </th>
                        <th
                            className="font-normal text-left px-3 py-2 border-r border-l"
                            style={{ width: "12%" }}
                        >
                            Trạng thái
                        </th>
                        <th
                            className="font-normal text-left px-3 py-2 border-r border-l"
                            style={{ width: "12%" }}
                        >
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody className="text-[13px]">
                    <tr className="border-b cursor-default hover:bg-gray-100">
                        <td className="py-1 px-2 border-r">
                            <Switch
                                defaultChecked
                                onChange={onChange}
                                size="small"
                            />
                        </td>
                        <td className="border-r py-1 px-2">
                            <p className="text-sm font-semibold">
                                Tuyển Dụng Nhân Viên Làm Đồ Án - Đà Nẵng
                            </p>
                            <p className="mt-1 text-[13px] text-[#555555]">
                                Ngày tạo: 19/04/2024
                            </p>
                            <p className="text-[13px] text-[#555555]">
                                Hạn nộp: 07/06/2024
                            </p>
                        </td>
                        <td className="py-1 px-2 border-r">Chưa có ứng viên</td>
                        <td className="py-1 px-2 border-r">100</td>
                        <td className="py-1 px-2 border-r">Đang hiển thị</td>
                        <td className="py-1 px-2 border-r gap-2 justify-center">
                            <button className="p-1.5 rounded-full transition-all bg-red-100 hover:bg-red-500 group">
                                {/* <LuTrash2 className="w-4 h-4 text-red-500 group-hover:text-white" /> */}
                                gg
                            </button>
                            <button className="p-1.5 rounded-full transition-all bg-green-100 hover:bg-green-500 group">
                                {/* <GoPencil className="w-4 h-4 text-green-500 group-hover:text-white" /> */}
                                gg
                            </button>
                        </td>
                    </tr>
                    <tr className="border-b cursor-default hover:bg-gray-100">
                        <td className="py-1 px-2 border-r">
                            <Switch
                                defaultChecked
                                onChange={onChange}
                                size="small"
                            />
                        </td>
                        <td className="py-1 px-2 border-r">
                            Senior Frontend Developer
                        </td>
                        <td className="py-1 px-2 border-r">5</td>
                        <td className="py-1 px-2 border-r">100</td>
                        <td className="py-1 px-2 border-r">Đang hiển thị</td>
                        <td className="py-1 px-2 border-r flex gap-2 justify-center">
                            <button className="p-1.5 rounded-full transition-all bg-red-100 hover:bg-red-500 group">
                                {/* <LuTrash2 className="w-4 h-4 text-red-500 group-hover:text-white" /> */}
                                ff
                            </button>
                            <button className="p-1.5 rounded-full transition-all bg-green-100 hover:bg-green-500 group">
                                {/* <GoPencil className="w-4 h-4 text-green-500 group-hover:text-white" /> */}
                                gg
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
