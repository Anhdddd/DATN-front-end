import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import JobCard2 from "@/components/Atoms/JobCard2";
import SearchJob from "./SearchJob";


export default function Job() {

    return (
        <div className="flex flex-col w-full max-w-[1132px] rounded-md mt-6 gap-4 bg-white">
            <div className="w-full h-[180px] flex flex-col px-5 pt-4 gap-4 rounded-t-md bg-gradient-to-r from-blue-950 to-blue-600">
                <h1 className="text-2xl font-bold text-white">
                    Việc làm tốt nhất
                </h1>
                <span className="text-[15px] text-white">
                    Tìm kiếm công việc mơ ước từ những cơ hội việc làm tốt nhất
                    trên JobCV
                </span>
                <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center gap-1 bg-white text-xs px-2 py-1 rounded-xl">
                        <FaCheck className="bg-Neutrals-blue-700 text-white p-0.5 rounded-full" />
                        <p className="font-bold text-blue-700">Lương cao</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 bg-white text-xs px-2 py-1 rounded-xl">
                        <FaCheck className="bg-Neutrals-blue-700 text-white p-0.5 rounded-full" />
                        <p className="font-bold text-blue-700">
                            Phúc lợi hấp dẫn
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-1 bg-white text-xs px-2 py-1 rounded-xl">
                        <FaCheck className="bg-Neutrals-blue-700 text-white p-0.5 rounded-full" />
                        <p className="font-bold text-blue-700">
                            Môi trường chuyên nghiệp
                        </p>
                    </div>
                </div>
            </div>

            <SearchJob />

            <section className="w-full flex flex-col gap-2 px-4 py-5 border-t">
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
                    salary="10 -30 triệu"
                />
                <JobCard2
                    img="https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/to-chuc-giao-duc-va-dao-tao-apollo-viet-nam-5dd4bce9c2fa0.jpg"
                    title="Nhân viên kinh doanh"
                    company="Công ty cổ phần quản lý bất động sản"
                    location="Hà Nội"
                    salary="10 -30 triệu"
                />
            </section>
        </div>
    );
}
