import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
export default function JobCard(props) {
    return (
        <Link to="/job/1" className="flex p-3 rounded-sm bg-white border h-[107px] w-[369px]">
            <div className="flex-shrink-0">
                <img src={props.img} alt="job" className="w-20 h-20" />
            </div>
            <div className="flex flex-col ml-3 pt-2 justify-between">
                <Tooltip title={props.title} placement="top">
                    <h3 className="text-sm font-semibold font-sans max-w-[250px] cursor-pointer hover:text-blue-700 truncate">{props.title}</h3>
                </Tooltip>
                <Tooltip title={props.company} placement="top">
                    <p className="text-xs font-medium font-sans text-Primary max-w-[250px] cursor-pointer truncate">{props.company}</p>
                </Tooltip>
                <div className="flex justify-between items-center text-xs">
                    <p className="px-2 py-1 bg-gray-100 font-sans rounded-sm cursor-default font-medium">{props.salary}</p>
                    <p className="px-2 py-1 bg-gray-100 font-sans rounded-sm cursor-default font-medium">{props.location}</p>
                </div>
            </div>
        </Link>
    );
}
