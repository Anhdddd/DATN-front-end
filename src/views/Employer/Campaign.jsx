import {
    Form,
    Button,
    Input,
    InputNumber,
    Select,
    DatePicker,
    message,
} from "antd";
import { useState } from "react";
import TiptapEditor from "@/components/TiptapEditor";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

export default function Campaign() {
    const [form] = Form.useForm();
    const [selectedItems, setSelectedItems] = useState([]);
    const onFinish = (value) => {
        message.success("Submit success!");
        console.log("value: ", value);
    };
    const onFinishFailed = () => {
        message.error("Submit failed!");
    };
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    const changeDate = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <section className="flex flex-col w-full px-5">
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="w-full bg-white p-5 shadow"
            >
                <div className="flex justify-between items-center mb-5 ">
                    <h2 className="font-bold text-base">
                        Tạo chiến dịch tuyển dụng
                    </h2>{" "}
                </div>

                <Form.Item
                    name="title"
                    label="Tiêu đề tin tuyển dụng"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message:
                                "Vui lòng nhập tiêu đề chiến dịch tuyển dụng!",
                        },
                    ]}
                >
                    <Input
                        className="rounded-sm text-sm font-normal h-10"
                        placeholder="Ví dụ: Nhân viên kinh doanh, Lập trình viên..."
                    />
                </Form.Item>

                <Form.Item
                    name="category"
                    label="Ngành nghề"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng chọn ngành nghề!",
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        className="rounded-sm text-sm font-normal h-10"
                        placeholder="Chọn ngành nghề"
                        value={selectedItems}
                        onChange={setSelectedItems}
                        style={{
                            width: "100%",
                        }}
                        options={filteredOptions.map((item) => ({
                            value: item,
                            label: item,
                        }))}
                    />
                </Form.Item>

                <Form.Item
                    name="salary"
                    label="Lương"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mức lương tuyển dụng!",
                        },
                    ]}
                >
                    <Input
                        className="rounded-sm text-sm font-normal h-10"
                        placeholder="Ví dụ: 7 - 10 triệu"
                    />
                </Form.Item>

                <div className="flex w-full gap-4">
                    <Form.Item
                        name="deadline"
                        className="font-medium w-full"
                        label="Hạn chót nộp hồ sơ"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn thời gian",
                            },
                        ]}
                    >
                        <DatePicker
                            className="rounded-sm text-sm font-normal h-10 w-full"
                            onChange={changeDate}
                        />
                    </Form.Item>
                    <Form.Item
                        name="workType"
                        label="Hình thức làm việc"
                        className="font-medium w-full"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn hình thức!",
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Chọn hình thức"
                            className="rounded-sm text-sm font-normal h-10 border-black"
                            value={selectedItems}
                            onChange={setSelectedItems}
                            style={{
                                width: "100%",
                            }}
                            options={filteredOptions.map((item) => ({
                                value: item,
                                label: item,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item
                        name="workPlace"
                        className="font-medium w-full"
                        label="Khu vực làm việc"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn khu vực!",
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Chọn khu vực"
                            className="rounded-sm text-sm font-normal h-10"
                            value={selectedItems}
                            onChange={setSelectedItems}
                            style={{
                                width: "100%",
                            }}
                            options={filteredOptions.map((item) => ({
                                value: item,
                                label: item,
                            }))}
                        />
                    </Form.Item>
                </div>

                <div className="flex w-full gap-4">
                    <Form.Item
                        name="quantity"
                        className="font-medium w-full"
                        label="Số lượng tuyển"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn số lượng",
                            },
                        ]}
                    >
                        <InputNumber
                            size="large"
                            type="number"
                            className="rounded-sm text-sm w-full font-normal"
                            placeholder="Ví dụ: 5"
                            min={1}
                            max={100}
                        />
                    </Form.Item>
                    <Form.Item
                        name="experience"
                        className="font-medium w-full"
                        label="Kinh nghiệm"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn kinh nghiệm!",
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Chọn hình thức"
                            className="rounded-sm text-sm font-normal h-10"
                            value={selectedItems}
                            onChange={setSelectedItems}
                            style={{
                                width: "100%",
                            }}
                            options={filteredOptions.map((item) => ({
                                value: item,
                                label: item,
                            }))}
                        />
                    </Form.Item>
                </div>
                <Form.Item
                    name="location"
                    className="font-medium w-full"
                    label="Địa điểm làm việc"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng chọn kinh nghiệm!",
                        },
                    ]}
                >
                    <Input
                        className="rounded-sm text-sm font-normal h-10"
                        placeholder="Ví dụ: 123 Điện Biên Phủ, Quận 1, TP.HCM"
                    />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Mô tả công việc"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mô tả công việc!",
                        },
                    ]}
                >
                    <TiptapEditor name="description" form={form} />
                </Form.Item>

                <Form.Item
                    name="requirement"
                    label="Yêu cầu công việc"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập yêu cầu công việc!",
                        },
                    ]}
                >
                    <TiptapEditor name="requirement" form={form} />
                </Form.Item>

                <Form.Item
                    name="benefit"
                    label="Quyền lợi được hưởng"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập quyền lợi được hưởng!",
                        },
                    ]}
                >
                    <TiptapEditor name="benefit" form={form} />
                </Form.Item>

                <Form.Item
                    name="workTime"
                    label="Thời gian làm việc"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập thời gian làm việc!",
                        },
                    ]}
                >
                    <Input
                        className="rounded-sm text-sm font-normal h-10"
                        placeholder="Ví dụ: 8h - 17h"
                    />
                </Form.Item>
                    

                <Form.Item>
                    <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="w-full rounded-md bg-Neutrals-blue-700"
                    >
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
            <Button
                onClick={() => {
                    const values = form.getFieldsValue();
                    console.log(values);
                }}
            >
                In ra giá trị
            </Button>
        </section>
    );
}
