import { IoFolderOpenSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";

export default function CompanyFollowedCard(props) {
    return (
        <div className="flex justify-between min-w-96 p-4 border border-[#EFEFEF] rounded-md">
            <div className="flex  h-[73px] w-full gap-4">
                <div className="flex-shrink-0 w-[73px] h-[73px] flex items-center justify-center object-contain rounded-sm shadow">
                    <img src={props.img} className="w-[54px] h-auto" alt="" />
                </div>
                <div className="flex flex-col justify-between text-[13px] text-[#777777] w-full">
                    <h1 className="text-base font-semibold text-gray-800">
                        {props.title}
                    </h1>
                    <div className="flex gap-1 items-center">
                        <IoFolderOpenSharp /> <p>{props.occupation}Tài chính</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center gap-1">
                            <MdGroups className="w-4 h-4"/> <p>{props.size} Người theo dõi</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoBriefcase /> 6 việc làm
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full flex items-center">
                <button className="bg-[#FF7D55] hover:bg-orange-500 text-sm flex-shrink-0 flex items-center px-3 h-8 text-white rounded-md">
                    Hủy theo dõi
                </button>
            </div>
        </div>
    );
}
