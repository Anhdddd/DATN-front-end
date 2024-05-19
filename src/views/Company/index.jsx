import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CompanyCard2 from "@/components/Atoms/CompanyCard2";
const Company = () => {
    return (
        <section className="flex justify-center w-full items-center bg-[rgb(250,250,255)]">
            <div className="flex flex-col w-full max-w-[1132px] py-5 ">
                <div className="p-2 bg-[#E6EFFF] w-2/3 min-w-[400px] rounded-sm flex gap-2">
                    <Input
                        size="large"
                        placeholder="Nhập tên công ty"
                        className="gap-1 rounded-sm "
                        prefix={<SearchOutlined className="text-gray-600" />}
                    />
                    <button className="h-10 hover:bg-[#FF7D55] flex items-center justify-center min-w-[120px] bg-orange-500 text-white rounded-sm">
                        Search
                    </button>
                </div>
                <div className="flex flex-col w-full py-6 gap-4">
                    <h1 className="text-2xl font-bold text-blue-700 font-sans">
                        DANH SÁCH CÁC CÔNG TY NỔI BẬT
                    </h1>
                    <div className="grid grid-cols-3 gap-4">
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                        <CompanyCard2 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
