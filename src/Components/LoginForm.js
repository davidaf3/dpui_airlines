import React from "react";
import { Button, Form, Input, Typography } from "antd";
import withRouter from "./withRouter";

class LoginForm extends React.Component {
  sendLogin(values) {
    this.props
      .callBackOnFinishLoginForm({
        email: values.email,
        password: values.password,
      })
      .then(() => {
        if (this.props.redirectHome) {
          this.props.navigate("/");
        }
      });
  }

  render() {
    return (
      <div>
        {this.props.showTitle && (
          <Typography.Title level={2}>Inicio de sesión</Typography.Title>
        )}
        <Form
          name="basic"
          labelCol={{ span: 24 / 3 }}
          wrapperCol={{ span: 24 / 3 }}
          initialValues={{ remember: true }}
          onFinish={(values) => this.sendLogin(values)}
          autoComplete="off"
        >
          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              { required: true, message: "Introduce tu correo electrónico" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Introduce tu contraseña" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{ xs: { offset: 0 }, sm: { offset: 8, span: 24 / 3 } }}
          >
            <Button type="primary" htmlType="submit" block>
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
