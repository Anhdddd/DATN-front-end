import { Form, Button, Input, message } from "antd";

export default function User() {
    const [form] = Form.useForm();
    const onFinish = (value) => {
        message.success("Submit success!");
        console.log("form data: ", value);
        navigate("/");
    };
    const onFinishFailed = () => {
        message.error("Submit failed!");
    };
    return (
        <section className="flex flex-col w-full min-h-svh">
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="w-full p-4 bg-white rounded-md border"
            >
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-base text-gray-800">
                        Thông tin cá nhân
                    </h2>
                </div>

            </Form>
        </section>
    );
}
