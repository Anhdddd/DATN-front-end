import Job from "@/views/Job";
import JobDetail from "@/views/Job/JobDetail";
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
    path: "/job",
    element:  <DefaultLayout />,
    children: [
        {
            path: "/job",
            element: <Job />,
        },
        {
            path: "/job/:id",
            element: <JobDetail />,
        },
    ]
}