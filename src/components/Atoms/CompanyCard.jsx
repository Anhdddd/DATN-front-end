export default function CompanyCard(props) {
    return (
        <div className="flex flex-col items-center transition-all duration-300 hover:border-blue-600 hover:shadow-[0px_3px_12px_0px_rgba(0,75,212,0.3)] py-4 px-5 rounded-sm bg-white border border-gray-300 h-[150px] w-[270px]">
            <div className="flex-shrink-0">
                <img src={props.img} alt="job" className="w-20 h-20" />
            </div>
            <span className="text-sm font-sans font-bold uppercase text-center">
                {props.title}
            </span>
        </div>
    );
}

// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;