import { HiSpeakerphone } from "react-icons/hi";
import { FaFileCircleCheck } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
export default function Employer() {
    return (
        <section className="flex gap-4 px-5">
            <div className="flex items-center gap-4 px-5 w-1/3 bg-white shadow border py-4">
                <div className="rounded-full p-3 bg-blue-100">
                    <HiSpeakerphone className="w-7 h-7 text-Neutrals-blue-600" />
                </div>
                <div className="flex flex-col text-Neutrals-blue-700">
                    <h2 className="text-lg font-semibold">1</h2>
                    <span className="text-sm">Chiến dịch tuyển dụng</span>
                </div>
            </div>
            <div className="flex items-center gap-4 px-5 w-1/3 bg-white shadow border py-4">
                <div className="rounded-full p-3 bg-purple-100">
                    <IoEyeSharp className="w-7 h-7 text-purple-600" />
                </div>
                <div className="flex flex-col text-purple-600">
                    <h2 className="text-lg font-semibold">1</h2>
                    <span className="text-sm">Lượt xem việc làm</span>
                </div>
            </div>
            <div className="flex items-center gap-4 px-5 w-1/3 bg-white shadow border py-4">
                <div className="rounded-full p-3 bg-green-100">
                    <FaFileCircleCheck className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex flex-col text-green-700">
                    <h2 className="text-lg font-semibold">1</h2>
                    <span className="text-sm">Số CV ứng tuyển</span>
                </div>
            </div>
        </section>
    );
}
