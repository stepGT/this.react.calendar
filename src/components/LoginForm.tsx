import { FC, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions();
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const onFinish = () => {
        login(username, password);
    }
    return (
        <Form
            onFinish={onFinish} // Trigger after submitting the form and verifying data successfully
        >   
            { error && <div style={{ color: 'red' }}>{ error }</div>}

            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;