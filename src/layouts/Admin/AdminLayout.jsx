import SideBar from "./SideBar";
import TitleMenu from "./TitleMenu";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
    return (
        <div className="flex">
            <SideBar />
            <div className="w-full transition-all duration-500 ease-in-out">
                <TitleMenu />
                <div className="bg-[rgb(238,242,246)] px-3 py-3 mr-2 rounded-md space-y-4 min-h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
