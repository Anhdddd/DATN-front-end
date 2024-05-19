import { Tooltip } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
export default function JobCardApplied(props) {
    return (
        <Link
            to={"/job/" + 12}
            className={`flex p-3 rounded-sm transition-all bg-slate-100 hover:border-slate-400 border group w-full group ${props.className}`}
        >
            <div className="flex-shrink-0">
                <img
                    src={props.img}
                    alt="job"
                    className="w-[120px] h-[120px] border border-[#F4F4F4] rounded-sm"
                />
            </div>
            <div className="flex flex-col ml-3 pt-2 justify-between w-full">
                <div className="flex justify-between border-b">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex justify-between">
                            <Tooltip title={props.title} placement="top">
                                <h3 className="text-[17px] font-bold font-sans cursor-pointer pr-6 group-hover:text-blue-700">
                                    {props.title}
                                </h3>
                            </Tooltip>
                            <div className="text-md flex-shrink-0 font-semibold text-blue-700">
                                {props.salary}
                            </div>
                        </div>
                        <Tooltip title={props.company} placement="top">
                            <p className="text-[15px] pr-24 uppercase font-sans text-[#6F7882] cursor-pointer">
                                {props.company} Thời gian ứng tuyển: 17-05-2024
                                16:51 PM
                            </p>
                        </Tooltip>

                        <div className="text-[#424E5C] text-sm relative bottom-1">
                            Thời gian ứng tuyển: 17-05-2024 16:51 PM
                        </div>
                        <div className="flex justify-between relative bottom-1 items-center">
                            <div className="text-[#424E5C] text-[15px] ">
                                CV đã ứng tuyển:{" "}
                                <Link className="underline text-blue-600">
                                    Tên CV
                                </Link>
                            </div>
                            <Link className="items-center gap-1 flex text-blue-600 font-medium py-1 px-2 rounded-3xl bg-blue-100 hover:bg-blue-200">
                                <FaEye className="w-5 h-5" />{" "}
                                <span className="text-[15px] text-blue-700">
                                    Xem CV
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-2">
                    <div className="flex items-center gap-1 text-sm text-[#6F7882]">
                        Trạng thái:{" "}
                        <p className="text-[#00B14F] font-medium">
                            Đã ứng tuyển
                        </p>
                    </div>
                    <span className="text-sm text-[#6F7882]">Vào lúc: 17-05-2024 16:51 PM</span>
                </div>
            </div>
        </Link>
    );
}
