import { useEffect, useState } from "react";
import { Menu } from "../../MenuComponent";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { selectIsAuth, logout, selectUser } from "../../../../redux/slices/auth";

export const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  
  const userData = useSelector(state=>state.auth.data);


  const onClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти?')){
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };


  const handleShowMenuBtnClick = () => {
    setIsMenuVisible(!isMenuVisible)
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
    <nav className="nav">
      <div className="logo"></div>
      <div className="nav-buttons">
        <div className="free-consult-btn">
          <span onClick={handleTryFreeBtn} className="free-consult-btn-name">Попробовать бесплатно</span>
          <div className="free-consult-btn-square">
            <div className="free-consult-btn-img"></div>
          </div>
        </div>
        {!isAuth ? (
          <>
        <div className="enter-btn">
          <span onClick={handleRegistrationBtnClick} className="enter-btn-name">Регистрация</span>
          <div className="enter-btn-square">
            <div className="enter-btn-btn-img"></div>
          </div>
        </div>
        <div className="enter-btn">
          <span onClick={handleLoginBtnClick} className="enter-btn-name">Войти</span>
          <div className="enter-btn-square">
            <div className="enter-btn-btn-img"></div>
          </div>
        </div>
        </>
        ):(
          <>
            <span>Привет, {userData.fullName}! </span>
            <div className="enter-btn">
              <span onClick={onClickLogout} className="enter-btn-name">Выйти</span>
              <div className="enter-btn-square">
                <div className="enter-btn-btn-img"></div>
              </div>
            </div>
          </>
        )}

        <div onClick={handleShowMenuBtnClick} className="show-menu-btn"></div>
      </div>
    </nav>
    {isMenuVisible && <Menu handleShowMenuBtnClick={handleShowMenuBtnClick}/>}
    </>
  );
};
