import Company from '@/views/Company';
import CompanyDetail from '@/views/Company/CompanyDetail';
import CompanyIntroduce from '@/views/Company/CompanyIntroduce';
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
    path: "/company",
    element:  <DefaultLayout />,
    children: [
        {
            path: "",
            element:  <Company />,
        },
        {
            path: ":id",
            element:  <CompanyIntroduce />,
        },
    ]
}