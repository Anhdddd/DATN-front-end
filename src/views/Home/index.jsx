import DafaultLayout from "@/layouts/DefaultLayout";
import styles from "./home.module.css";
import Search from "@/components/Search";
import JobCard from "@/components/Atoms/JobCard";
import CompanyCard from "@/components/Atoms/CompanyCard";
import OccupationCard from "@/components/Atoms/OccupationCard";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
    return (
        <DafaultLayout>
            <div className={styles.banner}>
                <Search />
            </div>
            <section className="flex flex-col w-full max-w-[1132px]">
                <div className="flex justify-between items-center w-full py-6">
                    <h1 className="text-2xl font-bold text-blue-700 font-sans">
                        Việc làm tốt nhất
                    </h1>
                    <Link to='/job' className="text-[13px] font-medium underline font-sans transition-all duration-300 cursor-pointer hover:no-underline">
                        Xem tất cả
                    </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản ajdnjdnfjdjjh  jnfj fjfjf"
                        location="Hà Nội"
                        salary="10 - 30 triệu"
                    />
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản"
                        location="Hà Nội"
                        salary="10 - 30 triệu"
                    />
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản"
                        location="Hà Nội"
                        salary="10 - 30 triệu"
                    />
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản"
                        location="Hà Nội"
                        salary="10 - 30 triệu"
                    />
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản"
                        location="Hà Nội"
                        salary="10 - 30 triệu"
                    />
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản"
                        location="Hà Nội"
                        salary="10 -30 triệu"
                    />
                    <JobCard
                        img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                        title="Nhân viên kinh doanh"
                        company="Công ty cổ phần quản lý bất động sản"
                        location="Hà Nội"
                        salary="10 -30 triệu"
                    />
                </div>
                <div className="flex justify-center"> 1/50 </div>
            </section>

            <section className="flex justify-center mt-6 bg-white w-full">
                <div className="flex flex-col w-full max-w-[1132px] gap-4">
                    <div className="flex justify-between items-center pt-6">
                        <h1 className="text-2xl font-bold text-blue-700 font-sans">
                            Top công ty hàng đầu
                        </h1>
                        <div className="">kk</div>
                    </div>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={1000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 4,
                                partialVisibilityGutter: 40,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                            },
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={3}
                        swipeable
                    >
                        <CompanyCard
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Công ty cổ phần quản lý bất động sản"
                        />
                        <CompanyCard
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Công ty cổ phần quản lý bất động sản"
                        />
                        <CompanyCard
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Công ty cổ phần quản lý bất động sản"
                        />
                        <CompanyCard
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Công ty cổ phần quản lý bất động sản"
                        />
                        <CompanyCard
                            img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                            title="Công ty cổ phần quản lý bất động sản"
                        />
                    </Carousel>
                    {/* <Test /> */}
                </div>
            </section>

            <section className="flex justify-center mt-6 bg-white w-full">
                <div className="flex flex-col w-full max-w-[1132px] gap-1">
                    <div className="flex justify-between items-center pt-6">
                        <h1 className="text-2xl font-bold text-blue-700 font-sans">
                            Top ngành nghề nổi bật
                        </h1>
                        <div className="">kk</div>
                    </div>
                    <div className="flex gap-1 text-xs font-medium text-[#6F7882] font-sans">
                        Bạn muốn tìm việc mới? Xem danh sách việc làm
                        <span className="text-blue-600 underline font-sans font-medium">
                            tại đây
                        </span>
                    </div>
                    <div className="flex mt-3 gap-4">
                        <OccupationCard
                            img="https://www.topcv.vn/v4/image/welcome/top-categories/kinh-doanh-ban-hang.png?v=2"
                            title="Kinh doanh/Bán hàng"
                            number={100}
                        />
                        <OccupationCard
                            img="https://www.topcv.vn/v4/image/welcome/top-categories/it-phan-mem.png?v=2"
                            title="IT phần mềm"
                            number={100}
                        />
                        <OccupationCard
                            img="https://www.topcv.vn/v4/image/welcome/top-categories/hanh-chinh-van-phong.png?v=2"
                            title="Hành chính/Văn phòng"
                            number={100}
                        />
                        <OccupationCard
                            img="https://www.topcv.vn/v4/image/welcome/top-categories/giao-duc-dao-tao.png?v=2"
                            title="Giáo dục/Đào tạo"
                            number={100}
                        />
                    </div>
                </div>
            </section>
        </DafaultLayout>
    );
}
