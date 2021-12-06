import { FC } from 'react';
import {useDispatch} from 'react-redux';
import { Layout, Row, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { RoutesNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const Navbar: FC = () => {
    const dispatch = useDispatch();
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
                                    onClick={() => { dispatch(AuthActionCreators.logout()) }}
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