import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom"; // Thêm useNavigate vào danh sách import
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [useUsername, setUsername] = useState("");
  const [usePassword, setPassword] = useState("");
  const navigate = useNavigate(); // Lấy hàm chuyển hướng từ hook
  const [role, setRole] = useState(""); // Thêm biến role để theo dõi vai trò

  const submitHandle = () => {
    if (!useUsername || !usePassword) {
      // Check if username or password is empty, and display a "Please enter username and password" toast
      toast.error("Yêu cầu nhập tài khoản và mật khẩu");
      return;
    }

    axios
      .get("http://localhost:3004/users")
      .then((response) => {
        const data = response.data;
        let userFound = false; // Flag to check if a user with the given credentials was found
        data.forEach((user) => {
          const username = user.username;
          const password = user.password;
          const name = user.name;
          const email = user.email;
          if (username === useUsername && password === usePassword) {
            userFound = true;
            setRole(user.role);
            localStorage.setItem("isLogin", username);
            localStorage.setItem("isName", name);
            localStorage.setItem("isEmail", email);
          }
        });

        if (userFound) {
          if (role === "admin") {
            toast.success("Đăng nhập thành công");
            navigate("/admin");
          } else if (role === "seller") {
            toast.success("Đăng nhập thành công");
            navigate("/seller");
          } else if (role === "customer") {
            toast.success("Đăng nhập thành công");
            navigate("/");
          }
          // If no matching user was found, display a "Sai tài khoản hoặc mật khẩu" toast
        } else {
          toast.error("Sai tài khoản hoặc mật khẩu, vui lòng đăng nhập lại");
          console.log("====================================");
          console.log("abcd");
          console.log("====================================");
        }
      })
      .catch((error) => {
        console.log("Lỗi khi gửi yêu cầu get: ", error);
        toast.error("");
      });
  };

  return (
    <div>
      <div className="h-container flex gap-y-8 items-center flex-wrap w-full p-6 px-4 py-4 justify-between">
        {/* left side  */}
        <div className="left-side">
          <Link to="/">
            <img
              src="https://theme.hstatic.net/200000411281/1000949882/14/logo.png?v=229"
              width={300}
              alt="Logo"
            />
          </Link>
        </div>
        {/* right side  */}
        <div className="right-side justify-between">
          {/* menu  */}
          <div className="h-menu flex gap-y-8 justify-center items-center flex-wrap gap-8">
            <a>Liên Hệ</a>
            <a>65 Dương Tôn Hải, Đà Nẵng</a>
          </div>
        </div>
      </div>
      <div className="">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Tài Khoản!",
              },
            ]}
          >
            <Input
              value={useUsername}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Tài Khoản"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Mật Khẩu!",
              },
            ]}
          >
            <Input.Password
              value={usePassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật Khẩu"
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div>
              <Checkbox>Lưu Mật Khẩu</Checkbox>
              <Link to="/forgotpassword">Quên Mật Khẩu</Link>
            </div>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="submit"
              className="bg-slate-500"
              onClick={submitHandle}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
