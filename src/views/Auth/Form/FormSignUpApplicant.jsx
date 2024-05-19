import { Form, Button, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { register } from "@/api/auth/register";

export default function FormSignUpApplicant() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onFinish = async (value) => {
        const data = {
            role: 2,
            fullName: value.fullName,
            email: value.email,
            password: value.password,
        };
        const res = await register(data);
        if (res) {
            toast.success("Đăng ký thành công", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            localStorage.setItem("user_id", JSON.stringify(res.id));
            localStorage.setItem("access-token", res.token);
            localStorage.setItem("role", res.role);
            navigate("/");
        } else {
            toast.error("Email đã được đăng ký", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };
    const onFinishFailed = () => {
        message.error("Submit failed!");
    };
    return (
        <div className="flex bg-white">
            <div className="flex flex-col items-center gap-4 pt-20 bg-Neutrals-blue-700 text-white w-[360px] flex-shrink-0 px-10">
                <h1 className="text-center text-2xl">Đăng ký ứng viên</h1>
                <p className="text-center">
                    Đăng ký để tạo hồ sơ, xem việc làm phù hợp và ứng tuyển.
                </p>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="w-[550px] p-12"
            >
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-base">Đăng ký ứng viên</h2>{" "}
                    <div className="flex items-center gap-1">
                        <p className="italic">Bạn là nhà tuyển dụng?</p>
                        <Link
                            to="/sign-up-employer"
                            className="underline font-bold text-Neutrals-blue-700"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
                <Form.Item
                    name="fullName"
                    label="Họ và tên"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập tên của bạn!",
                        },
                        {
                            type: "url",
                            warningOnly: true,
                        },
                        {
                            type: "string",
                            min: 6,
                        },
                    ]}
                >
                    <Input
                        size="large"
                        className="rounded-sm text-sm"
                        placeholder="input placeholder"
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email đăng nhập"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email của bạn!",
                        },
                        {
                            type: "url",
                            warningOnly: true,
                        },
                        {
                            type: "string",
                            min: 6,
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
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu!",
                        },
                        {
                            type: "string",
                            min: 6,
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
                    label="Gõ lại mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng gõ lại mật khẩu!",
                        },
                        {
                            type: "string",
                            min: 6,
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
                        className="w-full rounded-md bg-Neutrals-blue-700"
                    >
                        Đăng ký
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
        </div>
    );
}
