import Employer from '@/views/Employer'
import EmployerLayout from '@/layouts/Employer/EmployerLayout'
import Campaign from '@/views/Employer/Campaign'
import CvManagement from '@/views/Employer/CvManagement'
import Company from '@/views/Employer/Company'
import Account from '@/views/Employer/Account'
import CampainManagement from '@/views/Employer/CampaignManagement'
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
            path: "campaign-management",
            element: <CampainManagement />,
        },
        {
            path: "cv-management",
            element: <CvManagement />,
        },
        {
            path: "company",
            element: <Company />,
        },
        {
            path: "setting",
            element: <Account />,
        },
    ]
}