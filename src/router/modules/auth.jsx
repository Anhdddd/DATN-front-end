import Login from "@/views/Auth/Login";
import SignUp from "@/views/Auth/SignUp";
import SignUpEmployer from "@/views/Auth/SignUpEmployer";
export default [
    { path: "/login", element: <Login /> },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/sign-up-employer",
        element: <SignUpEmployer />,
    }
];
