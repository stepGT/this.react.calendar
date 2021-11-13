import { FC } from 'react';
import { Layout, Row, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { RoutesNames } from '../router';

const Navbar: FC = () => {
    const router = useHistory();
    const auth   = true;
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    auth ?
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
                                onClick={router.push(RoutesNames.LOGIN)}
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