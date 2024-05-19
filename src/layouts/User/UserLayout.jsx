import Header from "../Header";
import UserNavigation from "./UserNavigation";
import { Outlet, useLocation } from "react-router-dom";

export default function EmployerLayout() {
    const location = useLocation();
    let title;
    switch (location.pathname) {
        case "/user":
            title = "Cài đặt thông tin cá nhân";
            break;
        case "/user/job-applied":
            title = "Việc đã ứng tuyển";
            break;
        case "/user/job-saved":
            title = "Việc đã lưu";
            break;
        case "/user/company-followed":
            title = "Công ty đã theo dõi";
            break;
        default:
            title = "";
    }

    return (
        <div className="flex relative flex-col items-center bg-[#F7F8FA]">
            <Header />
            <div className="flex flex-row relative w-4/5 h-full py-5  xl:max-w-[1362px]">
                <UserNavigation />
                <div className="flex justify-center w-full">
                    <div className="w-full flex flex-col gap-2 px-3">
                        <div className="">
                            <h1 className="text-lg w-full bg-white rounded-md border px-6 py-3 font-bold text-[#1D5193]">
                                {title}
                            </h1>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
