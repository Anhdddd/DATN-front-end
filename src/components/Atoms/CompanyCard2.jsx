import { Link } from "react-router-dom";
export default function CompanyCard2(props) {
    return (
        <div className="flex flex-col rounded-md gap-[44px] overflow-hidden h-[430px] bg-white shadow-sm transition-all duration-300 hover:shadow">
            <div className="relative w-full rounded-md">
                <img
                    src="https://static.topcv.vn/company_covers/cong-ty-co-phan-vien-thong-fpt-31f41267723f53b5a2973c4446b2151d-5fc9dbf2594f4.jpg"
                    alt=""
                    className="object-cover w-full h-40px object-center"
                />
                <div className="w-[63px] h-[63px] bg-white rounded-md absolute top-36 left-[16px]">
                    <img
                        src="https://static.topcv.vn/company_logos/6vJFmQJvgOOyaD53GYE86sgHxmlfHVAC_1695628300____5c565acefcad36149cfb1baf6ea0c512.png"
                        alt=""
                        className="object-cover w-full h-40px rounded-md object-center"
                    />
                </div>
            </div>
            <div className="flex flex-col px-4 h-full pb-2">
                <Link
                    to="/company/1"
                    className="uppercase text-sm font-bold hover:underline"
                >
                    NGÂN HÀNG TMCP VIỆT NAM THỊNH VƯỢNG (VPBANK)
                </Link>
                <div className="mt-2 h-full">
                    <span className="text-sm text-[#555555] line-clamp-[8]">
                        Về FE CREDIT Tiền thân là Khối Tín dụng tiêu dùng trực
                        thuộc Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank), FE
                        CREDIT đã thành công trong việc chuyển đổi hoạt động Tín
                        dụng tiêu dùng sang một pháp nhân độc lập mới với tên
                        Since entering the market in 2022, we have been
                        constantly developing and expanding our business network
                        with the present presence in 6 countries: France,
                        Germany, Italy, Spain, the United Kingdom, United
                        States, and continuing to enlarge our business. We allow
                        customers to customize fancy products to convey their
                        unique interests and preferences. At Timind, customers
                    </span>
                </div>
            </div>
        </div>
    );
}
