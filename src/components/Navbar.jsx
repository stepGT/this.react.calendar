import React, { FC } from 'react';
import { Layout, Row, Menu } from 'antd';

const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        Login
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
}

export default Navbar;