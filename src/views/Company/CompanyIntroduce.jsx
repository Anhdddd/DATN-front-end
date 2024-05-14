import bannerDefault from "@/assets/images/banner-default-company.webp";
import { Avatar, Button } from "antd";
import { IoIosPeople } from "react-icons/io";
import styles from "./CompanyIntroduce.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import JobCard2 from "@/components/Atoms/JobCard2";

export default function CompanyIntroduce() {
    return (
        <div className="flex flex-col mt-5 max-w-[1132px]">
            <section className="relative flex flex-col bg-white">
                <img src={bannerDefault} alt="" />
                <div className="w-[150px] h-[150px] absolute top-64 left-8 shadow rounded-full flex justify-center items-center bg-white">
                    <Avatar
                        src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-hang-tiet-kiem-637de1b0d244b.jpg"
                        shape="square"
                        size={100}
                    ></Avatar>
                </div>
                <div className="flex ml-52 pt-5 pb-8">
                    <div className="flex flex-col gap-1 w-full">
                        <h2 className="text-[22px] font-semibold">
                            CÔNG TY CỔ PHẦN GIAO HÀNG TIẾT KIỆM
                        </h2>
                        <span className="flex gap-2 items-center text-sm">
                            <IoIosPeople className="w-5 h-5 text-gray-700" />{" "}
                            200 người theo dõi
                        </span>
                    </div>
                    <div className="flex pr-5">
                        <Button
                            type="primary"
                            size="large"
                            icon={<PlusOutlined />}
                            className={`w-full bg-[#FF7D55] hover:bg-orange-500 font-semibold ${styles.button}`}
                        >
                            Theo dõi
                        </Button>
                    </div>
                </div>
            </section>
            <main className="flex gap-4 mt-4">
                <article className="flex flex-col bg-white">
                    <section className="flex flex-col gap-4 p-5">
                        <h3 className="text-lg font-semibold">
                            Giới thiệu công ty
                        </h3>
                        <p className="text-gray-700 text-sm">
                            Công ty Cổ phần Giao Hàng Tiết Kiệm (GHTK) là công
                            ty công nghệ hoạt động kinh doanh trong lĩnh vực bưu
                            chính. Ưu thế của GHTK là tốc độ nhanh, mạng lưới
                            phủ sóng rộng trên toàn quốc và đặc biệt là thế mạnh
                            trong việc nghiên cứu và ứng dụng công nghệ mới phục
                            vụ cho hoạt động bưu chính. Chúng tôi tin rằng dịch
                            vụ này là hữu ích cho xã hội nói chung. Người bán
                            hàng bán được nhiều hơn, khách hàng mua sắm thoải
                            mái hơn, và người giao hàng có thêm nhiều công việc
                            và thu nhập xứng đáng. Trải qua hành trình 9 năm
                            phát triển, GHTK chính thức cán mốc giao nhận 1 tỷ
                            đơn hàng, phục vụ hơn một triệu nhà bán lẻ online
                            trên toàn quốc với hệ thống hơn 1500 bưu cục, hơn
                            2500 xe tải cùng hơn 30.000 shipper, vận hành trên
                            diện tích hơn 600.000m2 kho bãi.
                        </p>
                    </section>

                    <section className="w-full flex flex-col gap-2 px-4 py-5 border-t">
                        <h1 className="text-lg font-medium mb-4">Vị trí đang tuyển dụng</h1>
                        <JobCard2
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Nhân viên kinh doanh"
                            company="Công ty cổ phần quản lý bất động sản ajdnjdnfjdjjh  jnfj fjfjf"
                            location="Hà Nội"
                            salary="10 - 30 triệu"
                        />
                        <JobCard2
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Nhân viên kinh doanh"
                            company="Công ty cổ phần quản lý bất động sản"
                            location="Hà Nội"
                            salary="10 - 30 triệu"
                        />
                        <JobCard2
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Nhân viên kinh doanh"
                            company="Công ty cổ phần quản lý bất động sản"
                            location="Hà Nội"
                            salary="10 - 30 triệu"
                        />
                        <JobCard2
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Nhân viên kinh doanh"
                            company="Công ty cổ phần quản lý bất động sản"
                            location="Hà Nội"
                            salary="10 - 30 triệu"
                        />
                    </section>
                </article>
                <aside className="min-w-[350px] sticky top-[72px] h-[85vh] bg-white p-4 gap-4 flex flex-col">
                    <h1 className="text-lg font-semibold">Thông tin liên hệ</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <FaLocationDot className="w-4 h-4 text-blue-500" />
                                <p className="text-sm font-medium">
                                    Địa chỉ công ty
                                </p>
                            </div>
                            <p className="text-sm text-[#4D5965]">
                                Tòa nhà GHTK Building - Số 8 Phạm Hùng, Mễ Trì,
                                Từ Liêm, Hà Nội
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <FaGlobe className="w-4 h-4 text-blue-500" />
                                <p className="text-sm font-medium">Website</p>
                            </div>
                            <p className="text-sm text-[#4D5965]">
                                https://giaohangtietkiem.vn/
                            </p>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
