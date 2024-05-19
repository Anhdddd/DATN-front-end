import Header from "./Header";
import { Outlet } from "react-router-dom"
export default function DefaultLayout({ children }) {
    return (
        <div className="flex relative flex-col items-center bg-[rgb(241,242,244)]">
            <Header />
            {children}
            <Outlet />
        </div>
    );
}
