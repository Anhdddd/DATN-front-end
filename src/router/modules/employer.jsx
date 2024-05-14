import Employer from '@/views/Employer'
import EmployerLayout from '@/layouts/EmployerLayout'
import Campaign from '@/views/Employer/Campaign'
import CvManagement from '@/views/Employer/CvManagement'
export default {
    path: "/employer",
    element: <EmployerLayout />,
    children: [
        {
            path: "",
            element: <Employer />,
        },
        {
            path: "dashboard",
            element: <div>Dashboard</div>,
        },
        {
            path: "campaign",
            element: <Campaign />,
        },
        {
            path: "cv-management",
            element: <CvManagement />,
        },
        {
            path: "company",
            element: <div>Company</div>,
        },
        {
            path: "setting",
            element: <div>Setting</div>,
        },
    ]
}