import React, { Component } from "react";
import {
    Form,
    Input,
    Button,
    Checkbox,
    Typography,
    Card,
    Spin,
    Alert,
} from "antd";
import { login } from "../../actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

const { Text } = Typography;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            err: "",
        };
    }

    onFinish = (data) => {
        console.log("Finish: ", data);
        this.setState({ loading: true });
        this.props
            .login(data)
            .then((res) => {
                this.setState({ loading: false });
                if (res.data.token) {
                    // redirect homepage
                    // window.location.href = "/";
                    this.props.history.push("/");
                }
            })
            .catch((err) => {
                this.setState({ err: err.response.data.err, loading: false });
            });
    };

    render() {
        const { loading, err } = this.state;
        return this.props.isLoggedIn ? (
            <Redirect to="/" />
        ) : (
            <Card
                title={<Text underline>Login</Text>}
                style={{ width: 600, textAlign: "center", margin: "50px auto" }}
            >
                <Text
                    style={{ display: "inline-block", marginBottom: "10px" }}
                    type="danger"
                >
                    {err}
                </Text>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={loading}
                        >
                            {loading ? <Spin /> : "Submit"}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
}

export default withRouter(connect(mapStateToProps, { login })(LoginPage));
