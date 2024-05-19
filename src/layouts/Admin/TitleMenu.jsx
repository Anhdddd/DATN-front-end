import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useLocation } from "react-router-dom";
export default function TitleMenu() {
    const location = useLocation();
    const path = location.pathname;
    let title;
    switch (path) {
        case "/admin":
            title = "Dashboard";
            break;
        case "/admin/user-management":
            title = "User Management";
            break;
        case "/admin/company-management":
            title = "Company Management";
            break;
        case "/admin/job-management":
            title = "Job Management";
            break;
        default:
            title = "";
    }

    return (
        <header className="sticky top-0 flex px-3 w-full items-center z-10 bg-white py-3">
            <h1 className="text-lg font-bold ">{title}</h1>
            <Avatar
                className="ml-auto"
                icon={<UserOutlined />}
                style={{ backgroundColor: "#87d068" }}
            />
        </header>
    );
}
