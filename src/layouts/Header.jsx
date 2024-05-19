import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineWork, MdLogout } from "react-icons/md";
import { FaBuilding, FaHeart, FaBell, FaUser } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { Button, Popover } from "antd";
import { Heart, BriefcaseBusiness } from "lucide-react";
import Logo from "@/assets/images/logo.png";
import styles from "./Header.module.css";

const PopoverMyJob = () => (
    <div className="flex flex-col">
        <NavLink
            to="/user/job-applied"
            className={({ isActive }) =>
                isActive
                    ? `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 text-blue-700`
                    : `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 hover:text-blue-700 `
            }
        >
            <BriefcaseBusiness className="w-5 h-5" /> Việc làm đã ứng tuyển
        </NavLink>
        <NavLink
            to="/user/job-saved"
            className={({ isActive }) =>
                isActive
                    ? `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 text-blue-700`
                    : `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 hover:text-blue-700 `
            }
        >
            <Heart className="w-5 h-5" /> Việc làm đã lưu
        </NavLink>
    </div>
);

const PopoverAccount = ({ onLogout }) => (
    <div className="flex flex-col">
        <NavLink
            to="/user/job-applied"
            className={({ isActive }) =>
                isActive
                    ? `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 text-blue-700`
                    : `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 hover:text-blue-700 `
            }
        >
            <RiUserSettingsLine className="w-5 h-5" /> Cài đặt tài khoản
        </NavLink>
        <div className="w-full border-t"></div>
        <NavLink
            to="/user/job-applied"
            className={({ isActive }) =>
                isActive
                    ? `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 text-blue-700`
                    : `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 hover:text-blue-700 `
            }
        >
            <BriefcaseBusiness className="w-5 h-5" /> Việc làm đã ứng tuyển
        </NavLink>
        <NavLink
            to="/user/job-saved"
            className={({ isActive }) =>
                isActive
                    ? `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 text-blue-700`
                    : `flex gap-2 items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-slate-200 hover:text-blue-700 `
            }
        >
            <Heart className="w-5 h-5" /> Việc làm đã lưu
        </NavLink>
        <div className="w-full border-t"></div>
        <div
            className="flex gap-2 items-center py-2 px-3 cursor-pointer rounded-md transition-all duration-300 text-red-600"
            onClick={onLogout}
        >
            <MdLogout className="w-5 h-5" /> Đăng xuất
        </div>
    </div>
);

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access-token");
        navigate("/login");
    };

    return (
        <header className="flex sticky top-0 z-10 justify-between items-center bg-Neutrals-blue-750 w-full h-14 px-6">
            <div className="flex gap-10">
                <NavLink to="/" className="flex items-center">
                    <img src={Logo} alt="logo" className="w-32" />
                </NavLink>
                <div className="flex items-center justify-between gap-2">
                    <div className={styles.item}>
                        <MdOutlineWork className="text-lg" />{" "}
                        <p className="text-xs">Việc làm</p>
                    </div>
                    <NavLink
                        to="/company"
                        className={({ isActive }) =>
                            isActive ? `${styles.item} text-white` : styles.item
                        }
                    >
                        <FaBuilding className="text-lg" />{" "}
                        <p className="text-xs">Công ty</p>
                    </NavLink>
                    <Popover content={<PopoverMyJob />}>
                        <div className={styles.item}>
                            <FaHeart className="text-lg" />{" "}
                            <p className="text-xs">Việc của tôi</p>
                        </div>
                    </Popover>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 border-l-2 pl-2 border-Neutrals-blue-600">
                <NavLink
                    to="/employer"
                    className="text-Neutrals-text-blue-500 text-xs transition-colors hover:text-white cursor-pointer"
                >
                    NHÀ TUYỂN DỤNG?
                </NavLink>
                <div className="flex justify-center items-center gap-3">
                    <Button
                        shape="circle"
                        type="primary"
                        icon={<FaBell />}
                    ></Button>
                    <Popover
                        content={<PopoverAccount onLogout={handleLogout} />}
                    >
                        <Button
                            shape="circle"
                            type="primary"
                            icon={<FaUser />}
                        ></Button>
                    </Popover>
                </div>
            </div>
        </header>
    );
}
