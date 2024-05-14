export default function Occupation(props) {
    return (
        <div className="flex flex-col items-center gap-2 justify-center transition-all duration-300 hover:border-blue-600 hover:shadow-[0px_3px_12px_0px_rgba(0,75,212,0.3)] hover:bg-white py-4 px-5 rounded-sm bg-[#F3F5F7] h-[207px] w-[269px]">
            <div className="flex-shrink-0">
                <img src={props.img} alt="job" className="w-20 h-20" />
            </div>
            <span className="text-sm font-sans font-bold text-center">
                {props.title}
            </span>
            <span className="text-sm text-blue-600 font-sans">{props.number} việc làm</span>
        </div>
    );
}