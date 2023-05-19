import React from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import { fetchAuth, fetchRegister, selectIsAuth } from "../../../redux/slices/auth";

import { EYE_OFF_ICON, ARROW_UP_WHITE_ICON, REGFORM_IMG} from '../assets';
import styles from './Login.module.scss';

export const Login =()=>{
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();
	const {
	  register, 
	  handleSubmit, 
	  formState:{errors, isValid}
	} = useForm({
	  defaulValues: {
		email: '',
		password: ''
	  },
	  mode: 'onChange',
	  })

	  const onSubmit = async (values) => {
		const data = await dispatch(fetchAuth(values));
		if(!data.payload){
		  return alert('Не удалось авторизоваться');
		}
		if('token' in data.payload){
		  window.localStorage.setItem('token', data.payload.token);
		  window.localStorage.setItem('userName', data.payload.fullName);
		} 
	  };
	  if(isAuth) {
		return <Navigate to="/"/>
	  }

	return(
		<section className={styles.registration}>
			<div className={styles.content}>
				<div className={styles.registration_block}>
					<div className={styles.registration_form}>
						<div className={styles.form_title}>Авторизация</div>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
						
							<div className={styles.input_block}>
								<input  {...register('email', {required: 'Укажите почту'})}  className={styles.form_input} type='email' name="email" placeholder='Ваша почта' required/>
							</div>
							<div className={styles.input_block}>
								<input {...register('password', {required: 'Укажите пароль'})}  className={styles.form_input} type='password' name="password" placeholder='Пароль' required/>
								<img className={styles.eye_off_icon} src={EYE_OFF_ICON} alt="Показать пароль" />
							</div>
							<input disabled={!isValid} type="submit" className={styles.submit_btn} value='Войти'/>
								{/* <img className={styles.arrow_up_white_icon} src={ARROW_UP_WHITE_ICON} alt="" /> */}
							
						</form>
					</div>
				
				</div>
				<div className={styles.img_block}>
					<img className={styles.regform_img} src={REGFORM_IMG} alt="" />
				</div>
			</div>
		</section>
	)
}