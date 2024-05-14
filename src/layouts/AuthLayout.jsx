import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen items-center gap-16 bg-gray-100">
            <header className="flex justify-between items-center bg-gradient-to-r from-[#001744]  to-[#0059FC] w-full h-14">
                <Link to="/" className="flex mx-10 items-center">
                    <img src={Logo} alt="logo" className="w-36" />
                </Link>
            </header>
            {children}
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;
