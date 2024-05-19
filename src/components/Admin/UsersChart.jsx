import Chart from "react-apexcharts";

export default function UsersChart({ className }) {
    const data = [
        { name: "January", value: 30 },
        { name: "February", value: 40 },
        { name: "March", value: 35 },
        { name: "April", value: 50 },
        { name: "May", value: 49 },
        { name: "June", value: 60 },
        { name: "July", value: 70 },
        { name: "August", value: 91 },
        { name: "September", value: 125 },
        { name: "October", value: 130 },
        { name: "November", value: 110 },
        { name: "December", value: 95 },
    ];

    return (
        <div className={`flex flex-col bg-white ` + className}>
            <div className="flex justify-between">
                <div className="grid grid-cols-1">
                    <span className="text-sm font-normal text-gray-500">
                        Total users
                    </span>
                    <span className="text-lg font-semibold text-gray-700">
                        10
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1E88E5] rounded-full mr-2"></div>
                    <div className="text-sm font-semibold text-gray-500">
                        This year
                    </div>
                </div>
            </div>

            <div className="overflow-hidden">
                <Chart
                    options={{
                        chart: {
                            id: "basic-bar",
                            toolbar: {
                                show: true,
                            },
                        },
                        xaxis: {
                            categories: data.map((item) => item.name),
                            labels: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                            },
                            axisTicks: {
                                show: true,
                            },
                        },
                        yaxis: {
                            tickAmount: 5,
                            labels: {
                                show: true,
                            },
                        },
                        grid: {
                            show: true,
                        },
                        legend: {
                            show: false,
                        },
                        dataLabels: {
                            enabled: false, // disable labels on bars
                        },
                    }}
                    series={[
                        {
                            name: "series-1",
                            data: data.map((item) => item.value),
                        },
                    ]}
                    type="bar"
                    height={400}
                />
            </div>
        </div>
    );
}
