import UserLayout from "@/layouts/User/UserLayout";
import User from "@/views/User";
import JobApplied from "@/views/User/JobApplied";
import JobSaved from "@/views/User/JobSaved";
import CompanyFollowed from "@/views/User/CompanyFollowed";


export default {
    path: "/user",
    element:  <UserLayout />,
    children: [
        {
            path: "",
            element: <User />,
        },
        {
            path: "job-applied",
            element: <JobApplied />,
        },
        {
            path: "job-saved",
            element: <JobSaved />,
        },
        {
            path: "company-followed",
            element: <CompanyFollowed />,
        }
    ]
}