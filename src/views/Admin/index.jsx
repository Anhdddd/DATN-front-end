import StatisticCard from '@/components/Admin/StatisticCard';
import UsersChart from '@/components/Admin/UsersChart';
import { Users, Building2, BriefcaseBusiness } from 'lucide-react';
export default function Admin() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatisticCard title="Total Users" icon={Users} color="blue" total={10} />
            <StatisticCard title="Total Companies" icon={Building2} color="green" total={10} />
            <StatisticCard title="Total Jobs" icon={BriefcaseBusiness} color="purple" total={10} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UsersChart className="md:col-span-2 pt-5 px-5 rounded-md"/>
        </div>
        </>
    );
}