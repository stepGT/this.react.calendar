import { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import './App.css';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {
  const { setAuth, setUser } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ uname: localStorage.getItem('username' || '') } as IUser);
      setAuth(true);
    }
  }, [setUser, setAuth]);

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
