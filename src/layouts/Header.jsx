import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineWork } from "react-icons/md";
import styles from "./Header.module.css";
import { FaBuilding } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { Button } from "antd";
import { FaUser } from "react-icons/fa";
export default function Header() {
    return (
        <header className="flex sticky top-0 z-10 justify-between items-center bg-Neutrals-blue-750 w-full h-14 px-6">
            <div className="flex gap-10">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="logo" className="w-32" />
                </Link>
                <div className="flex items-center justify-between gap-2">
                    <div className={styles.item}>
                        <MdOutlineWork className="text-lg" />{" "}
                        <p className="text-xs">Việc làm</p>
                    </div>
                    <div className={styles.item}>
                        <FaBuilding className="text-lg" />{" "}
                        <p className="text-xs">Công ty</p>
                    </div>
                    <div className={styles.item}>
                        <FaHeart className="text-lg" />{" "}
                        <p className="text-xs">Việc của tôi</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 border-l-2 pl-2 border-Neutrals-blue-600">
                <span className="text-Neutrals-text-blue-500 text-xs transition-colors hover:text-white cursor-pointer">
                    NHÀ TUYỂN DỤNG?
                </span>
                <div className="flex justify-center items-center gap-3">
                    <Button
                        shape="circle"
                        type="primary"
                        icon={<FaBell />}
                    ></Button>
                    <Button
                        shape="circle"
                        type="primary"
                        icon={<FaUser />}
                    ></Button>
                </div>
            </div>
        </header>
    );
}
