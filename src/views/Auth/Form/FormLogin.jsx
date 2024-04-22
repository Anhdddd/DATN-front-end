import { Form, Button, Input, message } from "antd";
import { Link } from "react-router-dom";
export default function FormLoginApplicant() {
    const [form] = Form.useForm();
    const onFinish = () => {
        message.success("Submit success!");
    };
    const onFinishFailed = () => {
        message.error("Submit failed!");
    };
    return (
        <div className="flex bg-white">
            <div className="flex flex-col items-center gap-4 pt-20 bg-Neutrals-blue-700 text-white w-[360px] flex-shrink-0 px-10">
                <h1 className="text-center text-2xl">Đăng nhập</h1>
                <p className="text-center">
                    Đăng nhập xem việc làm phù hợp và ứng tuyển.
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
                    <h2 className="font-bold text-base">
                        Điền thông tin đăng nhập
                    </h2>{" "}
                </div>

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

                <Form.Item>
                    <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="w-full rounded-md bg-Neutrals-blue-700"
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>
                <Form.Item>
                    <span>Bạn chưa có tài khoản?</span>{" "}
                    <Link
                        to="/sign-up"
                        className="underline text-Neutrals-blue-700"
                    >
                        Đăng ký
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}
