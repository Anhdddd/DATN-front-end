import Company from '@/views/Company';
import CompanyDetail from '@/views/Company/CompanyDetail';

export default {
    path: "/company",
    element:  <Company />,
    children: [
        {
            path: ":id",
            element:  <CompanyDetail />,
        }
    ]
}