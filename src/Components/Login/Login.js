import React, { useContext } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

const App = () => {
  const { listUser } = useContext(Context);

  console.log(listUser);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="l-wrapper">
      <div className="flex gap-y-8  items-center flex-wrap w-full p-6 px-4 py-4 justify-between">
        <Link to="/">
          <img
            src="https://theme.hstatic.net/200000411281/1000949882/14/logo.png?v=229"
            width={300}
          />
        </Link>
        <div className="h-menu flex gap-y-8 justify-center items-center flex-wrap gap-8">
          <a>Liên Hệ</a>
          <a>CSKH: cucghach6lo@gmail.com</a>
          <a>65 Dương Tôn Hải, Đà Nẵng</a>
          <button className="button">
            <Link to="/ForgotPassword">Quên Mật Khẩu</Link>
          </button>
        </div>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-slate-600"
          >
            Đăng Nhập
          </Button>
          Or{" "}
          <Link to="/register" className="text-blue-600">
            Đăng Ký
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
