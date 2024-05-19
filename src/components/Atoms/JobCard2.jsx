import { Tooltip } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
export default function JobCard2(props) {
    return (
        <Link
            to={"/job/" + 12}
            className={`flex p-3 rounded-sm transition-all bg-white hover:bg-slate-100 border group min-h-[160px] w-full group ${props.className}`}
        >
            <div className="flex-shrink-0">
                <img
                    src={props.img}
                    alt="job"
                    className="w-[120px] h-[120px] border border-gray-200 rounded-sm"
                />
            </div>
            <div className="flex flex-col ml-3 pt-2 justify-between w-full">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <Tooltip title={props.title} placement="top">
                            <h3 className="text-[17px] font-semibold font-sans cursor-pointer group-hover:text-blue-700">
                                {props.title}
                            </h3>
                        </Tooltip>
                        <Tooltip title={props.company} placement="top">
                            <p className="text-sm font-sans text-[#424E5C] cursor-pointer">
                                {props.company}
                            </p>
                        </Tooltip>
                        {props.typeCard === "job-saved" && (
                            <div className="text-[#424E5C] text-sm relative bottom-1">
                                Đã lưu: 15/05/2024 - 22:23
                            </div>
                        )}
                    </div>
                    <div className="text-md font-semibold text-blue-700">
                        {props.salary}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-start gap-2 items-center text-xs">
                        <p className="px-2 py-1 bg-[#E9EAEC] font-sans rounded-sm cursor-default ">
                            {props.location}
                        </p>
                        <p className="px-2 py-1 bg-[#E9EAEC] font-sans rounded-sm cursor-default ">
                            Còn {11} ngày để ứng tuyển
                        </p>
                    </div>
                    <div className="">
                        <Button
                            type="primary"
                            className="h-[28px] w-[94px] rounded-sm text-xs"
                        >
                            Ứng tuyển
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
