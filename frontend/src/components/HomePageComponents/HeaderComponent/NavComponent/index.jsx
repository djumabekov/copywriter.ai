import { useEffect } from "react";
import { Menu } from "../../MenuComponent";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { fetchAuthMe, selectIsAuth, logout} from "../../../../redux/slices/auth";
import { selectIsShowMenu, showMenu } from "../../../../redux/slices/ui";
import styles from './Nav.module.scss';

export const Nav = () => {

	const isShowMenu = useSelector(selectIsShowMenu);

  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuth);
  let userName = window.localStorage.getItem('userName');
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);



  const onClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти?')){
      dispatch(logout());
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userName');
    }
  };


  const handleShowMenuBtnClick = () => {
    dispatch(showMenu(!isShowMenu))
    
  }

  const handleRegistrationBtnClick = () =>{
    navigate('/registration')
  }

   const handleLoginBtnClick = () =>{
    navigate('/login')
  }

  const handleTryFreeBtn = () => {
    navigate('/rubrics')
  }
  return (
    <>
    <nav className={styles.nav}>
      <div className={styles.logo}></div>
      <div className={styles.nav_buttons}>
        <div className={styles.free_consult_btn}>
          <span onClick={handleTryFreeBtn} className={styles.free_consult_btn_name}>Попробовать бесплатно</span>
          <div className={styles.free_consult_btn_square}>
            <div className={styles.free_consult_btn_img}></div>
          </div>
        </div>
        {!isAuth ? (
          <>
        <div className={styles.enter_btn}>
          <span onClick={handleRegistrationBtnClick} className={styles.enter_btn_name}>Регистрация</span>
          <div className={styles.enter_btn_square}>
            <div className={styles.enter_btn_btn_img}></div>
          </div>
        </div>
        <div className={styles.enter_btn}>
          <span onClick={handleLoginBtnClick} className={styles.enter_btn_name}>Войти</span>
          <div className={styles.enter_btn_square}>
            <div className={styles.enter_btn_btn_img}></div>
          </div>
        </div>
        </>
        ):(
          <>
            <div className={styles.user_panel}>
              <div className={styles.user_avatar}> {userName[0].toUpperCase() + "" + userName[0].toUpperCase()} </div>
              <div className={styles.user_name}>Привет, {userName.length > 10 ? userName.substring(0, 10) + "..." : userName}!</div>
            </div>
            <div className={styles.enter_btn}>
              <span onClick={onClickLogout} className={styles.enter_btn_name}>Выйти</span>
              <div className={styles.enter_btn_square}>
                <div className={styles.enter_btn_btn_img}></div>
              </div>
            </div>
          </>
        )}

        <div onClick={handleShowMenuBtnClick} className={styles.show_menu_btn}></div>
      </div>
    </nav>
    {isShowMenu && <Menu handleShowMenuBtnClick={handleShowMenuBtnClick}/>}
    </>
  );
};
