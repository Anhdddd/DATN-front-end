import { Form, Button, Input, Select, message } from "antd";
import { useState } from "react";

const jobPositions = [
    { value: "Intern", title: "Thực tập" },
    { value: "Employee", title: "Nhân viên" },
    { value: "TeamLeader", title: "Trưởng nhóm" },
    { value: "DeputyManager", title: "Phó phòng" },
    { value: "Manager", title: "Trưởng phòng" },
    { value: "DeputyDirector", title: "Phó giám đốc" },
    { value: "Director", title: "Giám đốc" },
];

export default function Account() {
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState(
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-tuyet-dep-003.jpg"
    );
    const onFinish = (value) => {
        message.success("Submit success!");
        console.log("value: ", value);
    };
    const onFinishFailed = () => {
        message.error("Submit failed!");
    };

    const handleUpload = (file) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            if (reader.error) {
                console.error(
                    "An error occurred while reading the file:",
                    reader.error
                );
            } else {
                setImageUrl(reader.result);
            }
        };

        reader.readAsDataURL(file);

        // Prevent upload
        return false;
    };
    return (
        <section className="flex flex-col w-full px-5">
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="w-full bg-white p-5 shadow"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
            >
                <div className="flex flex-col w-full border p-4 rounded-md">
                    <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-base font-bold text-[#007C6B]">
                            Thông tin tài khoản
                        </h3>
                        <Form.Item
                            label="Họ và tên"
                            name="name"
                            className="font-medium"
                        >
                            <Input
                                className="rounded-sm text-sm font-normal h-10"
                                placeholder="Họ và tên"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Facebook"
                            name="facebook"
                            className="font-medium"
                        >
                            <Input
                                className="rounded-sm text-sm font-normal h-10"
                                placeholder="facebook(Nếu có)"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            className="font-medium"
                        >
                            <Input
                                className="rounded-sm text-sm font-normal h-10"
                                placeholder="Số điện thoại"
                            />
                        </Form.Item>
                        <Form.Item
                            name="jobTitle"
                            label="Vị trí công việc:"
                            className="font-medium"
                        >
                            <Select
                                size="large"
                                options={jobPositions}
                                onChange={(value) => console.log(value)}
                                className="rounded-sm text-sm font-normal h-10"
                                placeholder="Chọn vị trí công việc"
                            ></Select>
                        </Form.Item>
                    </div>
                </div>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full h-10 font-medium rounded-sm text-sm bg-[#007C6B] mt-5"
                    >
                        Lưu thông tin
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
}
