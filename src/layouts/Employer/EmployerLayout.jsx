import Header from "../Header";
import EmployerNavigation from "./EmployerNavigation";
import { Outlet, useLocation } from "react-router-dom";

export default function EmployerLayout() {
    const location = useLocation();
    let title;
    switch (location.pathname) {
        case "/employer":
        case "/employer/dashboard":
            title = "Dashboard";
            break;
        case "/employer/campaign":
            title = "Tạo tin tuyển dụng";
            break;
        case "/employer/campaign-management":
            title = "Chiến dịch tuyển dụng";
            break;
        case "/employer/cv-management":
            title = "Quản lý CV";
            break;
        case "/employer/company":
            title = "Thông tin công ty";
            break;
        case "/employer/setting":
            title = "Cài đặt tài khoản";
            break;
        default:
            title = "";
    }

    return (
        <div className="flex relative flex-col items-center bg-[#F9FAFB]">
            <Header />
            <div className="flex flex-row relative w-full h-full">
                <EmployerNavigation />
                <div className="flex justify-center w-full">
                    <div className="w-full flex flex-col max-w-[1362px]">
                        <h1 className="text-lg px-6 py-3 font-bold text-[#1D5193]">
                            {title}
                        </h1>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
