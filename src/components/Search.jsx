import { IoSearchSharp } from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProvinces } from "@/stores/reducers/ProvinceReducer";
import { Button } from "antd";
import axios from "axios";

export default function Search(props) {
    const [provinceValue, setProvinceValue] = useState();

    const dispatch = useDispatch();
    const provinces = useSelector((state) => state.province.provinces);

    useEffect(() => {
        axios.get("https://vapi.vnappmob.com/api/province").then((res) => {
            console.log(res);
            dispatch(setProvinces(res.data.results));
        });
    }, []);

    const handleProvinceSearch = (newValue) => {
        console.log(newValue);
    };
    const handleProvinceChange = (newValue) => {
        setProvinceValue(newValue);
    };

    return (
        <div className="mt-12 flex items-center bg-white px-1 rounded-3xl h-12 w-3/4 2xl:w-[1200px] ring-8 ring-[#002466] overflow-hidden">
            <div className="flex justify-start items-center p-2 gap-1 bg-white rounded-md min-w-[50%] w-full">
                <IoSearchSharp className="text-2xl text-slate-400 top-2 left-1 " />
                <input
                    type="text"
                    className="focus:outline-none text-sm tracking-tight h-10 caret-slate-600 text-slate-600 min-w-[50%] w-full flex-shrink-0"
                    placeholder="Tìm kiếm công việc"
                    value={provinceValue}
                />
            </div>
            <div className="border-l-2">
                <Select value={provinceValue} onValueChange={setProvinceValue}>
                    <SelectTrigger className="w-[200px] h-full">
                        <SelectValue className="" placeholder="Tất cả địa điểm" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {/* <SelectLabel>Fruits</SelectLabel> */}
                            <SelectItem value="all">Tất cả địa điểm</SelectItem>
                            {
                                provinces.map((d) => (
                                    <SelectItem key={d.province_id} value={d.province_id}>
                                        {d.province_name}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Button type="primary" className="h-10 w-52 rounded-3xl">
                Tìm kiếm
            </Button>
        </div>
    );
}
