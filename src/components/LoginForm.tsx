import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const onFinish = () => {
        dispatch(AuthActionCreators.login('stepGT', '777'));
    }
    return (
        <Form
            onFinish={onFinish} // Trigger after submitting the form and verifying data successfully
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;