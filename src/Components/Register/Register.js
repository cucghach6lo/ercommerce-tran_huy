import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net", ".yahhoo"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const postData = async (data) => {
    const responsive = await axios.post("http://localhost:3004/users", {
      email: data.email,
      username: data.username,
      password: data.password,
      name: data.name,
      address: data.address,
      phone: data.phone,
      gender: data.gender,
      role: "customer",
    });
    if (responsive.status === 200) {
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const data = {
      email: values.email,
      username: values.username,
      password: values.password,
      name: values.name,
      address: values.address,
      phone: values.phone,
      gender: values.gender,
    };
    postData(values);
    toast.success("Đăng ký thành công");
  };

  return (
    <div>
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
        </div>
      </div>
      <div className="bg-red-200  gap-y-8 justify-center items-center gap-8 flex-wrap mt-8">
        {/* right side  */}
        <div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Trường bạn nhập không phải E-mail!",
                },
                {
                  required: true,
                  message: "Hãy nhập Email của bạn!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật Khẩu"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu của bạn!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại Mật Khẩu"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập lại mật khẩu của bạn!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu mới bạn nhập không khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="username"
              label="Tài Khoản"
              tooltip="Tài khoản của bạn là:"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài Khoản của bạn!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="name"
              label="Tên"
              tooltip="Tên của bạn là:"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập Tên của bạn!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập địa chỉ của bạn!",
                },
              ]}
            >
              <Input placeholder="Địa chỉ" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại của bạn!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giới tính của bạn!",
                },
              ]}
            >
              <Select placeholder="Giới tính">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="bg-slate-600">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* left side  */}
        <div></div>
      </div>
    </div>
  );
};
export default App;
