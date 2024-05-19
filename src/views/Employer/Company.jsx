import {
    Form,
    Button,
    Input,
    InputNumber,
    Select,
    DatePicker,
    Image,
    Upload,
    message,
} from "antd";
import { useState } from "react";
import TiptapEditor from "@/components/TiptapEditor";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Company() {
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
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="w-full bg-white p-5 shadow"
            >
                <Form.Item>
                    <div className="flex items-center gap-10">
                        <Image width="100px" height="60px" src={imageUrl} />
                        <div className="flex flex-col gap-1">
                            <Upload
                                accept="image/*"
                                beforeUpload={handleUpload}
                                showUploadList={false}
                            >
                                <Button icon={<MdOutlineFileUpload />}>
                                    Cập nhật Logo công ty
                                </Button>
                            </Upload>
                            <p className="text-[10px]">
                                Dạng file .jpg, .jpeg, .png, kích thước tối ưu
                                100x60 pixel.
                            </p>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item
                    label="Tên công ty"
                    name="companyName"
                    className="font-medium"
                    rules={[
                        {
                            required: true,
                            message: "Please input company name!",
                        },
                    ]}
                >
                    <Input
                        className="rounded-sm text-sm font-normal h-10"
                        placeholder="Tên công ty"
                    />
                </Form.Item>

                <div className="flex flex-col w-full border p-4 rounded-md">
                    <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-base font-bold text-[#007C6B]">
                            Giới thiệu
                        </h3>
                        <Form.Item
                            name="companyDescription"
                            className="w-full"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please input company description!",
                                },
                            ]}
                        >
                            <TiptapEditor />
                        </Form.Item>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-base font-bold text-[#007C6B]">
                            Thông tin công ty
                        </h3>
                        <div className="flex w-full gap-2">
                            <Form.Item
                                label="Email"
                                name="email"
                                className="w-1/2 font-medium"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input email!",
                                    },
                                ]}
                            >
                                <Input
                                    className="rounded-sm text-sm font-normal h-10"
                                    placeholder="Email"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                className="w-1/2 font-medium"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input phone!",
                                    },
                                ]}
                            >
                                <Input
                                    className="rounded-sm text-sm font-normal h-10"
                                    placeholder="Số điện thoại"
                                />
                            </Form.Item>
                        </div>

                        <div className="flex w-full gap-2">
                            <Form.Item
                                label="Website"
                                name="website"
                                className="w-1/2 font-medium"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input website!",
                                    },
                                ]}
                            >
                                <Input
                                    className="rounded-sm text-sm font-normal h-10"
                                    placeholder="Website"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Quy mô công ty"
                                name="companySize"
                                className="w-1/2 font-medium"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input company size!",
                                    },
                                ]}
                            >
                                <Input
                                    className="rounded-sm text-sm font-normal h-10 w-full"
                                    placeholder="Quy mô công ty"
                                />
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Địa chỉ công ty"
                            name="companyAddress"
                            className="font-medium"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input company address!",
                                },
                            ]}
                        >
                            <Input
                                className="rounded-sm text-sm font-normal h-10"
                                placeholder="Địa chỉ công ty"
                            />
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
