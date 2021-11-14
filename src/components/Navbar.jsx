import { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { RoutesNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Navbar: FC = () => {
    const router = useHistory();
    const { isAuth } = useTypedSelector(state => state.auth);
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth ?
                        <>
                            <div style={{ color: 'white' }}>stepGT</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    onClick={() => { console.log('Logout') }}
                                    key="1">
                                    Logout
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => router.push(RoutesNames.LOGIN)}
                                key="1">
                                Login
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );
}

export default Navbar;