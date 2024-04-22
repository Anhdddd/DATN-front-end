import Logo from "@/assets/images/logo.png";
import FormLogin from "./Form/FormLogin";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="flex flex-col h-screen items-center gap-16 bg-gray-100">
            <header className="flex justify-between items-center bg-gradient-to-r from-[#001744]  to-[#0059FC] w-full h-14">
                <Link to="/" className="flex mx-10 items-center">
                    <img src={Logo} alt="logo" className="w-36" />
                </Link>
            </header>
            <FormLogin />
        </div>
    );
};

export default Login;
