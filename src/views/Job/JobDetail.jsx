import styles from "./JobDetail.module.css";
import { HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { MdAttachMoney } from "react-icons/md";
import SearchJob from "./SearchJob";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import bannerDefault from "@/assets/images/banner-default-company.webp";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function JobDetail() {
    return (
        <div className={`flex flex-col gap-3 w-full py-6 max-w-[1132px] ${styles.search}`}>
            <div className="w-full bg-white py-4 rounded-sm">
                <SearchJob />
            </div>

            <main className="flex gap-4">
                <article className="flex flex-col w-full">
                    <section className="flex flex-col bg-white rounded-md w-full p-4 gap-6">
                        <h1 className="text-xl font-bold">Kỹ sư cơ điện tử</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <MdAttachMoney className="w-5 h-5 p-1 bg-[#FF7D55] text-white rounded-full" />
                                <p className="text-sm text-[#FF7D55] font-medium">
                                    10 - 15 triệu
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <GrLocation className="w-5 h-5 p-1 bg-gray-100 text-gray-700 rounded-full" />
                                <p className="text-sm text-gray-700">Hà Nội</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FiCalendar className="w-5 h-5 p-1 bg-gray-100 text-gray-700 rounded-full" />
                                <p className="text-sm text-gray-700">
                                    Ngày đăng tuyển 24-04-2024 | Hết hạn trong:{" "}
                                    <span className="text-[#FF7D55]">
                                        5 Ngày tới
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button
                                type="primary"
                                size="large"
                                className={`w-full bg-[#FF7D55] hover:bg-orange-500 font-semibold ${styles.button}`}
                            >
                                Ứng tuyển ngay
                            </Button>

                            <Button
                                className="w-[156px] font-semibold"
                                size="large"
                                icon={<HeartOutlined />}
                            >
                                Lưu việc làm
                            </Button>
                        </div>
                        <div className="w-full border"></div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">
                                Mô tả công việc
                            </h2>
                            <div className="text-sm text-[#333333]">
                                <p>
                                    1. Phối hợp lắp đặt, vận hành hệ thống
                                    truyền tải, phân phối, ngắt điện và ghi chép
                                    hồ sơ bảo trì điện cao-trung-hạ thế
                                </p>
                                <p>
                                    2. Phối hợp lắp đặt, vận hành và bảo trì
                                    trạm biến áp, hệ thống điều hòa không khí,
                                    máy nén khí, cầu trục, lò hơi,...
                                </p>
                                <p>
                                    3. Phối hợp lắp đặt, điều chỉnh, khắc phục
                                    sự cố và bảo trì các thiết bị sản xuất
                                </p>
                                <p>
                                    4. Phone and email support to answer
                                    technical questions and provide assistance.
                                    This position will coordinate with customers
                                    and Arbin’s Support department to determine
                                    when on-site visits are required, and will
                                    help arrange the visit
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">
                                Yêu cầu công việc
                            </h2>
                            <div className="text-sm text-[#333333]">
                                <p>
                                    1. Phối hợp lắp đặt, vận hành hệ thống
                                    truyền tải, phân phối, ngắt điện và ghi chép
                                    hồ sơ bảo trì điện cao-trung-hạ thế
                                </p>
                                <p>
                                    2. Phối hợp lắp đặt, vận hành và bảo trì
                                    trạm biến áp, hệ thống điều hòa không khí,
                                    máy nén khí, cầu trục, lò hơi,...
                                </p>
                                <p>
                                    3. Phối hợp lắp đặt, điều chỉnh, khắc phục
                                    sự cố và bảo trì các thiết bị sản xuất
                                </p>
                                <p>
                                    4. Phone and email support to answer
                                    technical questions and provide assistance.
                                    This position will coordinate with customers
                                    and Arbin’s Support department to determine
                                    when on-site visits are required, and will
                                    help arrange the visit
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">
                                Quyền lợi được hưởng
                            </h2>
                            <div className="text-sm text-[#333333]">
                                <p>
                                    1. Phối hợp lắp đặt, vận hành hệ thống
                                    truyền tải, phân phối, ngắt điện và ghi chép
                                    hồ sơ bảo trì điện cao-trung-hạ thế
                                </p>
                                <p>
                                    2. Phối hợp lắp đặt, vận hành và bảo trì
                                    trạm biến áp, hệ thống điều hòa không khí,
                                    máy nén khí, cầu trục, lò hơi,...
                                </p>
                                <p>
                                    3. Phối hợp lắp đặt, điều chỉnh, khắc phục
                                    sự cố và bảo trì các thiết bị sản xuất
                                </p>
                                <p>
                                    4. Phone and email support to answer
                                    technical questions and provide assistance.
                                    This position will coordinate with customers
                                    and Arbin’s Support department to determine
                                    when on-site visits are required, and will
                                    help arrange the visit
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">
                                Địa điểm làm việc
                            </h2>
                            <div className="text-sm text-[#333333]">
                                <p>
                                    - Hồ Chí Minh: Dĩ An - (gần siêu thị Go Dĩ
                                    An, sát cạnh Thủ Đức), Thủ Đức
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">
                                Thời gian làm việc
                            </h2>
                            <div className="text-sm text-[#333333]">
                                <p>- Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)</p>
                                <p>- Nghỉ trưa từ 12h đến 1h30</p>
                            </div>
                        </div>
                    </section>
                    <section></section>
                </article>

                <aside className="flex flex-col max-w-[300px] relative rounded-sm bg-white">
                    <img
                        src={bannerDefault}
                        alt=""
                        className="h-[100px] w-[300px] rounded-t-sm"
                    />
                    <img
                        src="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        alt=""
                        className="w-20 h-20 absolute top-16 left-0 right-0 ml-auto mr-auto rounded-sm shadow"
                    />
                    <h1 className="mt-14 font-medium text-md px-3 text-center">
                        CÔNG TY TNHH ARBIN INSTRUMENTS VIỆT NAM
                    </h1>
                    <div className="flex flex-col px-4 mt-5 gap-4">
                        <div className="flex items-start gap-2">
                            <FaLocationDot className="w-5 h-5 p-1 bg-gray-200 relative top-1 text-gray-700 rounded-full flex-shrink-0" />
                            <p className="text-sm text-gray-800">
                                Văn phòng Symphony, Khu đô thị Vinhomes
                                Riverside, Long Biên, Hà Nội
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsFillPeopleFill className="w-5 h-5 p-1 bg-gray-200 relative top-1 text-gray-700 rounded-full flex-shrink-0" />
                            <p className="text-sm text-gray-800">
                                100 - 200 nhân viên
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <Link to="/company/1" className="text-center font-medium text-sm text-blue-600 hover:underline">
                                Xem trang công ty
                            </Link>
                            <FaArrowUpRightFromSquare className="text-blue-600 w-4 h-4" />
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
