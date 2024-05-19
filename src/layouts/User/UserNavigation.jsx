import { NavLink } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaHeart, FaBriefcase } from "react-icons/fa6";
import { RiChatFollowUpFill } from "react-icons/ri";
export default function UserNavigation() {
    const baseClass =
        "flex gap-2 items-center text-sm font-meidum pl-6 py-4 rounded-md transition-all duration-300";
    return (
        <div className="flex flex-col h-auto w-[304px] gap-[1px] px-2 pt-5 bg-white">
            <NavLink
                end
                to="/user"
                className={({ isActive }) =>
                    isActive
                        ? `${baseClass} text-gray-700 font-semibold bg-[rgb(235,242,255)]`
                        : `${baseClass}  hover:bg-[rgb(235,242,255)] text-gray-700`
                }
            >
                <MdAccountBox className="w-5 h-5" /> Thông tin tài khoản
            </NavLink>
            <NavLink
                end
                to="/user/job-applied"
                className={({ isActive }) =>
                    isActive
                        ? `${baseClass} text-gray-700 font-semibold bg-[rgb(235,242,255)] `
                        : `${baseClass}  hover:bg-[rgb(235,242,255)] text-gray-700`
                }
            >
                <FaBriefcase className="w-5 h-5" /> Việc đã ứng tuyển
            </NavLink>
            <NavLink
                end
                to="/user/job-saved"
                className={({ isActive }) =>
                    isActive
                        ? `${baseClass} text-gray-700 font-semibold bg-[rgb(235,242,255)] `
                        : `${baseClass}  hover:bg-[rgb(235,242,255)] text-gray-700`
                }
            >
                <FaHeart className="w-5 h-5" /> Việc đã lưu
            </NavLink>
            <NavLink
                end
                to="/user/company-followed"
                className={({ isActive }) =>
                    isActive
                        ? `${baseClass} text-gray-700 font-semibold bg-[rgb(235,242,255)]`
                        : `${baseClass}  hover:bg-[rgb(235,242,255)] text-gray-700`
                }
            >
                <RiChatFollowUpFill className="w-5 h-5" /> Công ty đang theo dõi
            </NavLink>
        </div>
    );
}
