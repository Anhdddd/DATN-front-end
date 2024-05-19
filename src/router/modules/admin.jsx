import AdminLayout from "@/layouts/Admin/AdminLayout";
import Dashboard from "@/views/Admin";
export default {
    path: "/admin",
    element:  <AdminLayout />,
    children: [
        {
            path: "",
            element:  <Dashboard />,
        },
        {
            path: "dashboard",
            element:  <Dashboard />,
        },
        {
            path: "company",
            element:  <div>Company detail</div>,
        },
        {
            path: "company/:id",
            element:  <div>Company detail</div>,
        },
        {
            path: "jobs",
            element:  <div>jobs detail</div>,
        },
        {
            path: "jobs/:id",
            element:  <div>jobs detail</div>,
        }

    ]
}

