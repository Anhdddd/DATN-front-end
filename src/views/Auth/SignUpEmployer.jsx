import { Link } from "react-router-dom";
import FormSignUpEmployer from "./Form/FormSignUpEmployer";
import Logo from "@/assets/images/logo.png";
const SignUpEmployer = () => {
    return (
        <div className="flex flex-col min-h-screen h-full items-center gap-16 bg-gray-100">
            <header className="flex justify-between items-center bg-gradient-to-r from-[#001744]  to-[#0059FC] w-full h-14">
                <Link to="/" className="flex mx-10 items-center">
                    <img src={Logo} alt="logo" className="w-36" />
                </Link>
            </header>
            <FormSignUpEmployer />
        </div>
    );
};

export default SignUpEmployer;

