import { NavLink } from "react-router-dom";
import IcFindUser from "@/assets/icons/IcFindUser";
import IcDashboard from "@/assets/icons/IcDashboard";
import IcManage from "@/assets/icons/IcManage";
import IcCompany from "@/assets/icons/IcCompany";
import IcSetting from "@/assets/icons/IcSetting";

export default function EmployerNavigation() {
    const baseClass =
        "flex gap-2 items-center text-sm font-semibold pl-2 py-3 rounded-l-2xl";
    return (
        <div className="relative h-full w-72">
            <div className="flex flex-col min-h-screen fixed top-15 pt-4 pl-5 gap-4 bg-gradient-to-b from-[rgb(24,53,107)] to-[rgb(23,59,129)]">
                <div className="flex flex-col gap-[1px] w-56 ">
                    <NavLink
                        end
                        to="/employer"
                        className={({ isActive }) =>
                            isActive
                                ? `${baseClass} text-[#00BF71] bg-white`
                                : `${baseClass} text-white hover:bg-[#00BF71]`
                        }
                    >
                        <IcDashboard className="w-5 h-5" /> Dashboard
                    </NavLink>
                    <NavLink
                        to="/employer/campaign"
                        className={({ isActive }) =>
                            isActive
                                ? `${baseClass} text-[#00BF71] bg-white`
                                : `${baseClass} text-white hover:bg-[#00BF71]`
                        }
                    >
                        <IcFindUser className="w-5 h-5" /> Chiến dịch tuyển dụng
                    </NavLink>
                    <NavLink
                        to="/employer/cv-management"
                        className={({ isActive }) =>
                            isActive
                                ? `${baseClass} text-[#00BF71] bg-white`
                                : `${baseClass} text-white hover:bg-[#00BF71]`
                        }
                    >
                        <IcManage className="w-5 h-5" /> Quản lý CV
                    </NavLink>
                    <NavLink
                        to="/employer/company"
                        className={({ isActive }) =>
                            isActive
                                ? `${baseClass} text-[#00BF71] bg-white`
                                : `${baseClass} text-white hover:bg-[#00BF71]`
                        }
                    >
                        <IcCompany className="w-5 h-5" /> Thông tin Công ty
                    </NavLink>
                    <NavLink
                        to="/employer/setting"
                        className={({ isActive }) =>
                            isActive
                                ? `${baseClass} text-[#00BF71] bg-white`
                                : `${baseClass} text-white hover:bg-[#00BF71]`
                        }
                    >
                        <IcSetting className="w-5 h-5" /> Tài khoản
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
