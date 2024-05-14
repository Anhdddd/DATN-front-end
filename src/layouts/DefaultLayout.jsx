import Header from "./Header";
import { Outlet } from "react-router-dom"
export default function DefaultLayout({ children }) {
    return (
        <div className="flex relative flex-col items-center bg-gray-100">
            <Header />
            {children}
            <Outlet />
        </div>
    );
}
