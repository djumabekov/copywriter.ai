import { Outlet } from 'react-router-dom';
import { Header } from './HeaderComponent';
import { Main } from './MainComponent';
// import { Footer } from '../FooterComponent';
import { SideBar } from './SideBarComponent';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <SideBar />
        <Main>
          <Header />
          <Outlet />
        </Main>
      
        {/* <Footer /> */}
      </div>
    </>
  );
};
