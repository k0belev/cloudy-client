import { IRegisterFormValues } from "@/containers/Auth/RegisterFormContainer/types";
import { KeyOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { FC } from "react";
import AuthForm from "..";
import { DEFAULT_AUTH_FORM_RULES } from "../constants";
import { AuthFormInstanceProps } from "../types";

const RegisterForm: FC<AuthFormInstanceProps> = ({ ...props }) => {
  return (
    <AuthForm {...props}>
      <Form.Item<IRegisterFormValues>
        rules={DEFAULT_AUTH_FORM_RULES}
        name="username"
      >
        <Input placeholder="Никнейм" suffix={<UserOutlined />} />
      </Form.Item>
      <Form.Item<IRegisterFormValues>
        rules={DEFAULT_AUTH_FORM_RULES}
        name="email"
      >
        <Input placeholder="Почта" suffix={<MailOutlined />} />
      </Form.Item>
      <Form.Item<IRegisterFormValues>
        rules={DEFAULT_AUTH_FORM_RULES}
        name="password"
      >
        <Input.Password placeholder="Пароль" suffix={<KeyOutlined />} />
      </Form.Item>
      <Form.Item<IRegisterFormValues>
        rules={DEFAULT_AUTH_FORM_RULES}
        name="repeatPassword"
      >
        <Input.Password
          placeholder="Повторите пароль"
          suffix={<KeyOutlined />}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Зарегистрироваться</Button>
      </Form.Item>
    </AuthForm>
  );
};

export default RegisterForm;
