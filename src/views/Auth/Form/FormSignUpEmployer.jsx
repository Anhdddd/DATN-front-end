import { Form, Button, Input, message } from "antd";
import { Link } from "react-router-dom";
import { Steps } from "antd";
import { Select } from "antd";
import { Image, Upload } from "antd";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { register } from "@/api/auth/register";
import { createCompany } from "@/api/company/createCompany";

const steps = [
    {
        title: "Đăng ký",
        content: "First-content",
    },
    {
        title: "Liên lạc",
        content: "Second-content",
    },
    {
        title: "Công ty",
        content: "Last-content",
    },
];

export default function FormSignUpEmployer() {
    const [form] = Form.useForm();
    const [current, setCurrent] = useState(0);
    const [imageUrl, setImageUrl] = useState(
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-tuyet-dep-003.jpg"
    );
    const [employerData, setEmployerData] = useState({});

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
                console.log("image: ", reader.result);
            }
        };

        reader.readAsDataURL(file);

        // Prevent upload
        return false;
    };

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const onSubmitNext = (values) => {
        setEmployerData({ ...employerData, ...values });
        next();
    };
    const onFinish = async (values) => {
        const dataEmployer = {
            email: employerData.email,
            password: employerData.password,
            fullName: employerData.fullName,
            phoneNumber: employerData.phoneNumber,
            facebookLink: employerData.facebookLink,
            role: 1,
        };
        const resEmployer = await register(dataEmployer);
        if (resEmployer) {
            localStorage.setItem("user_id", JSON.stringify(resEmployer.id));
            localStorage.setItem("access-token", resEmployer.token);
            localStorage.setItem("role", resEmployer.role);
            const dataCompany = {
                name: values["name-company"],
                address: values.address,
                description: values.description,
                logo: imageUrl,
            };
            const resCompany = await createCompany(dataCompany);
            if (resCompany) {
                message.success("Đăng ký thành công!");
            } else {
                message.error("Đăng ký thất bại!");
            }
        } else {
            message.error("Đăng ký thất bại!");
        }
    };
    const onFinishFailed = () => {
        message.error("Submit failed!");
    };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
        content: item.content,
    }));
    return (
        <div className="flex bg-white">
            <div className="flex flex-col items-center gap-4 pt-20 bg-Neutrals-blue-700 text-white w-[360px] flex-shrink-0 px-10">
                <h1 className="text-center text-2xl">
                    Đăng ký thông tin Nhà Tuyển Dụng
                </h1>
                <p className="text-center text-sm">
                    JobCV sẽ giúp bạn tìm được nhân sự phù hợp nhanh chóng và
                    hiệu quả. Đăng ký tài khoản ngay để có thể quản lý tin đăng
                    và thông tin ứng tuyển vào các vị trí của bạn.
                </p>
            </div>

            <div className="flex flex-col p-12 w-[550px] gap-5">
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">
                        ĐĂNG KÝ THÔNG TIN NHÀ TUYỂN DỤNG
                    </h2>
                </div>
                <Steps
                    current={current}
                    items={items}
                    className="font-semibold"
                />
                {current === 0 && (
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onSubmitNext}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="email"
                            label="Email đăng nhập:"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email của bạn!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Email người tìm việc"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Mật khẩu:"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập mật khẩu!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Email người tìm việc"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label="Gõ lại mật khẩu:"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng gõ lại mật khẩu!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Email người tìm việc"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-Neutrals-blue-700 rounded-md"
                            >
                                Tiếp theo
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <span>Bạn có tài khoản?</span>{" "}
                            <Link
                                to="/login"
                                className="underline text-Neutrals-blue-700"
                            >
                                Đăng nhập
                            </Link>
                        </Form.Item>
                    </Form>
                )}

                {current === 1 && (
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onSubmitNext}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="fullName"
                            label="Họ tên:"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập username của bạn!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Họ và tên"
                            />
                        </Form.Item>

                        <Form.Item
                            name="phoneNumber"
                            label="Số điện thoại:"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Vui lòng nhập số điện thoại của bạn!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Số điện thoại"
                            />
                        </Form.Item>

                        <Form.Item
                            name="facebookLink"
                            label="Facebook (Nếu có):"
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Link facebook nếu có"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-Neutrals-blue-700 rounded-md"
                            >
                                Tiếp theo
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <span>Bạn có tài khoản?</span>{" "}
                            <Link
                                to="/login"
                                className="underline text-Neutrals-blue-700"
                            >
                                Đăng nhập
                            </Link>
                        </Form.Item>
                    </Form>
                )}

                {current === 2 && (
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item>
                            <div className="flex items-center gap-10">
                                <Image
                                    width="100px"
                                    height="60px"
                                    src={imageUrl}
                                />
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
                                        Dạng file .jpg, .jpeg, .png, kích thước
                                        tối ưu 100x60 pixel.
                                    </p>
                                </div>
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="name-company"
                            label="Tên công ty:"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập tên công ty!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Tên công ty"
                            />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            label="Địa chỉ công ty:"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập địa chỉ công ty!",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Địa chỉ công ty"
                            />
                        </Form.Item>

                        <Form.Item name="description">
                            <Input.TextArea
                                size="large"
                                className="rounded-sm text-sm"
                                placeholder="Mô tả công ty"
                                rows={4}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-Neutrals-blue-700 rounded-md"
                            >
                                Hoàn tất
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <span>Bạn có tài khoản?</span>{" "}
                            <Link
                                to="/login"
                                className="underline text-Neutrals-blue-700"
                            >
                                Đăng nhập
                            </Link>
                        </Form.Item>
                    </Form>
                )}
            </div>
        </div>
    );
}
